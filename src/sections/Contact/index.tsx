import {
  type ChangeEvent,
  type FormEvent,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { CheckCircle2, LoaderCircle, Send, XCircle } from 'lucide-react';
import { submitContactForm, type ContactPayload } from '@/api/contact';
import { Button } from '@/components/common/Button';
import { Section } from '@/components/common/Section';
import { FadeUp } from '@/components/common/MotionWrappers';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
type ContactFieldName = keyof ContactPayload;

type ContactFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: ContactFieldName;
};

type ContactTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  name: ContactFieldName;
};

const initialFormValues: ContactPayload = {
  fullName: '',
  email: '',
  serviceInterestedIn: '',
  description: '',
};

const successMessage = 'Thanks for reaching out. Our team will get back to you shortly.';
const fallbackErrorMessage = 'We could not send your message right now. Please try again shortly.';
const inputClassName =
  'focus-ring h-12 w-full border border-white/15 bg-white/6 px-4 text-sm font-normal text-white outline-none transition-[border-color,box-shadow] placeholder:text-white/40 focus:border-primary focus:ring-primary/20';
const textareaClassName =
  'focus-ring min-h-28 w-full resize-none border border-white/15 bg-white/6 px-4 py-3 text-sm font-normal text-white outline-none transition-[border-color,box-shadow] placeholder:text-white/40 focus:border-primary focus:ring-primary/20';

function useContactForm() {
  const [values, setValues] = useState<ContactPayload>(initialFormValues);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status !== 'success') {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 10000);

    return () => window.clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    try {
      await submitContactForm(values);
      setValues(initialFormValues);
      setStatus('success');
      setMessage(successMessage);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : fallbackErrorMessage);
    }
  };

  const updateField = (field: ContactFieldName, value: string) => {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));

    if (status !== 'idle') {
      setStatus('idle');
      setMessage('');
    }
  };

  return {
    handleSubmit,
    message,
    status,
    updateField,
    values,
  };
}

function ContactIntro() {
  return (
    <FadeUp>
      <p className="mb-4 font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
        Contact us
      </p>
      <h2 className="font-display max-w-lg text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Got a question?
        <br />
        Let&apos;s connect.
      </h2>
      <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
        Have a question about MyDoctorCapsule or need help getting started? Send us a message and our team will be in touch within two working days.
      </p>
      <div className="mt-10">
        <p className="text-sm text-white/70">We&apos;re here to help.</p>
        <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
          Tell us how we can support you.
        </p>
      </div>
    </FadeUp>
  );
}

function ContactField({ label, ...inputProps }: ContactFieldProps) {
  return (
    <label className="grid gap-1.5 text-xs font-medium text-white/70">
      {label}
      <input {...inputProps} className={inputClassName} />
    </label>
  );
}

function ContactTextarea({ label, ...textareaProps }: ContactTextareaProps) {
  return (
    <label className="grid gap-1.5 text-xs font-medium text-white/70">
      {label}
      <textarea {...textareaProps} className={textareaClassName} />
    </label>
  );
}

function SubmitButton({ status }: { status: FormStatus }) {
  return (
    <Button
      type="submit"
      fullWidth
      disabled={status === 'submitting'}
      icon={status === 'submitting' ? LoaderCircle : Send}
      iconPosition="left"
    >
      {status === 'submitting' ? 'Sending message...' : 'Send message'}
    </Button>
  );
}

function StatusMessage({ message, status }: { message: string; status: FormStatus }) {
  if (!message) {
    return null;
  }

  const isSuccess = status === 'success';

  return (
    <p
      className={`mt-4 flex items-start gap-2 rounded-xl border px-4 py-3 text-sm font-semibold leading-relaxed ${
        isSuccess
          ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200'
          : 'border-red-400/30 bg-red-400/10 text-red-200'
      }`}
      role="status"
      aria-live="polite"
    >
      {isSuccess ? (
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
      ) : (
        <XCircle className="mt-0.5 h-5 w-5 shrink-0" />
      )}
      <span>{message}</span>
    </p>
  );
}

function ContactForm() {
  const { handleSubmit, message, status, updateField, values } = useContactForm();

  const handleFieldChange = (field: ContactFieldName) => {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateField(field, event.target.value);
    };
  };

  return (
    <FadeUp>
      <form
        className="grid gap-5 border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8"
        onSubmit={handleSubmit}
      >
        <ContactField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleFieldChange('fullName')}
          autoComplete="name"
          placeholder="Your full name"
          required
        />
        <ContactField
          label="Email address"
          name="email"
          type="email"
          value={values.email}
          onChange={handleFieldChange('email')}
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
        <ContactField
          label="What do you need help with?"
          name="serviceInterestedIn"
          value={values.serviceInterestedIn}
          onChange={handleFieldChange('serviceInterestedIn')}
          placeholder="How can we help?"
          required
        />
        <ContactTextarea
          label="Message"
          name="description"
          value={values.description}
          onChange={handleFieldChange('description')}
          placeholder="Tell us a little more about your request."
          required
        />
        <div>
          <SubmitButton status={status} />
          <StatusMessage message={message} status={status} />
        </div>
      </form>
    </FadeUp>
  );
}

export default function Contact() {
  return (
    <Section
      id="contact"
      background="dark"
      ariaLabel="Contact us"
      className="relative overflow-hidden"
    >
      <div className="hero-glow -right-36 -top-28" aria-hidden="true" />
      <div className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-16 xl:gap-20">
        <ContactIntro />
        <ContactForm />
      </div>
    </Section>
  );
}
