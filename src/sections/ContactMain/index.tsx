import { memo, useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, ChevronDown, LoaderCircle, XCircle } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { FadeLeft, FadeRight } from '@/components/common/MotionWrappers';
import { CONTACT_HELP_TOPICS } from '@/constants/site';
import { submitContactForm, type ContactPayload } from '@/api/contact';
import { useIntro } from '@/components/intro';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const fieldLabelClass = 'font-body text-xs text-white';
const fieldClass =
  'font-body w-full rounded-[10px] border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary';

const initialValues: ContactPayload = {
  fullName: '',
  email: '',
  serviceInterestedIn: CONTACT_HELP_TOPICS[0],
  description: '',
};

const successMessage = 'Thanks for reaching out. Our team will get back to you shortly.';
const fallbackErrorMessage = 'We could not send your message right now. Please try again shortly.';

function useContactForm() {
  const [values, setValues] = useState<ContactPayload>(initialValues);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status !== 'success') return undefined;

    const timer = window.setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 10000);

    return () => window.clearTimeout(timer);
  }, [status]);

  const updateField = (field: keyof ContactPayload, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (status !== 'idle') {
      setStatus('idle');
      setMessage('');
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    try {
      await submitContactForm(values);
      setValues(initialValues);
      setStatus('success');
      setMessage(successMessage);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : fallbackErrorMessage);
    }
  };

  return { values, status, message, updateField, handleSubmit };
}

function ContactMainSection() {
  const { enabled, config } = useIntro();
  const { values, status, message, updateField, handleSubmit } = useContactForm();

  const handleFieldChange =
    (field: keyof ContactPayload) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      updateField(field, event.target.value);
    };

  return (
    <section className="relative overflow-hidden pt-[152px] pb-24 lg:pt-[176px] lg:pb-32 !bg-white">
      {enabled && (
        <div
          id={config.heroAnchorId}
          className="pointer-events-none absolute top-20 right-8 z-20 md:right-12"
          style={{ width: config.heroLogoSize, height: config.heroLogoSize }}
          aria-hidden="true"
        />
      )}

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <FadeLeft className="flex flex-col justify-between gap-12">
            <div className="flex flex-col gap-6">
              <h1 className="type-hero max-w-xl">
                Have a Question? We&apos;re here to help you
              </h1>
              <p className="type-body max-w-lg text-lg">
                Share a few details about what you need and our team will help you
                understand what comes next.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-body text-text-body text-lg">Or just wanna say hi?</p>
              <a
                href="mailto:hello@mydrcapsule.com"
                className="font-display text-text hover:text-primary text-2xl"
              >
                hello@mydrcapsule.com
              </a>
            </div>
          </FadeLeft>

          <FadeRight>
            <form
              onSubmit={handleSubmit}
              className="bg-navy flex flex-col gap-6 rounded-[20px] border border-white/10 p-8 lg:p-10"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className={fieldLabelClass}>
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="fullName"
                  type="text"
                  required
                  value={values.fullName}
                  onChange={handleFieldChange('fullName')}
                  autoComplete="name"
                  placeholder="Enter your first name"
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className={fieldLabelClass}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  onChange={handleFieldChange('email')}
                  autoComplete="email"
                  placeholder="Enter your email"
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-topic" className={fieldLabelClass}>
                  What do you need help with?
                </label>
                <div className="relative">
                  <select
                    id="contact-topic"
                    name="serviceInterestedIn"
                    value={values.serviceInterestedIn}
                    onChange={handleFieldChange('serviceInterestedIn')}
                    className={`${fieldClass} appearance-none pr-12`}
                  >
                    {CONTACT_HELP_TOPICS.map((option) => (
                      <option key={option} value={option} className="bg-navy">
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute top-1/2 right-5 h-4 w-4 -translate-y-1/2 text-white/70"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-description" className={fieldLabelClass}>
                  Description
                </label>
                <textarea
                  id="contact-description"
                  name="description"
                  required
                  rows={4}
                  value={values.description}
                  onChange={handleFieldChange('description')}
                  placeholder="Please describe what you need"
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-primary font-display flex items-center justify-center gap-2 rounded-[12px] px-8 py-4 text-lg font-medium text-white transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-60"
              >
                {status === 'submitting' && (
                  <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
                )}
                {status === 'submitting' ? 'Sending...' : 'Submit Requirement'}
              </button>

              {message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-2 rounded-[10px] border px-4 py-3 text-sm font-medium ${
                    status === 'success'
                      ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                      : 'border-red-400/30 bg-red-400/10 text-red-300'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  ) : (
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  )}
                  <span>{message}</span>
                </p>
              )}
            </form>
          </FadeRight>
        </div>
      </Container>
    </section>
  );
}

export default memo(ContactMainSection);
