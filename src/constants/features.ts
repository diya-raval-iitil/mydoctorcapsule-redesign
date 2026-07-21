import {
  Calendar,
  Globe,
  BarChart3,
  Shield,
  UserPlus,
  Star,
  type LucideIcon,
} from 'lucide-react';

export interface Feature {
  id: string;
  tag: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentClass: string;
  accentBgClass: string;
  glowClass?: string;
  featured?: boolean;
}

export const FEATURES: Feature[] = [
  {
    id: 'appointments',
    tag: 'APPOINTMENTS',
    title: 'Seamless Appointments',
    description:
      'From cardiologists to gynaecologists — explore top medical practitioners in your city and book appointments instantly.',
    icon: Calendar,
    accentClass: 'text-indigo-500',
    accentBgClass: 'bg-indigo-500/10',
  },
  {
    id: 'delivery',
    tag: 'DELIVERY',
    title: 'Discounted Delivery',
    description:
      'Save big on every purchase. Get the best deals on medicines with home delivery.',
    icon: Globe,
    accentClass: 'text-primary',
    accentBgClass: 'bg-primary/10',
  },
  {
    id: 'booking',
    tag: 'DIAGNOSTICS',
    title: 'Affordable Booking',
    description:
      'Book blood tests, scans, and other diagnostic tests at affordable prices from trusted labs. Compare options and find the best available service.',
    icon: BarChart3,
    accentClass: 'text-emerald-500',
    accentBgClass: 'bg-emerald-500/10',
  },
  {
    id: 'records',
    tag: 'SECURITY',
    title: 'Secure Health Records',
    description:
      'Store all your medical prescriptions, reports, and diagnosis history in an end-to-end encrypted, DISHA-compliant platform.',
    icon: Shield,
    accentClass: 'text-violet-500',
    accentBgClass: 'bg-violet-500/10',
  },
  {
    id: 'profiles',
    tag: 'PROFILES',
    title: 'Personalised Family Profiles',
    description:
      "Manage your family's health from a single dashboard and track every member's health every time.",
    icon: UserPlus,
    accentClass: 'text-accent',
    accentBgClass: 'bg-accent/10',
  },
  {
    id: 'reminders',
    tag: 'REMINDERS',
    title: 'Timely Follow-Up Reminders',
    description:
      'Never miss a crucial appointment ever again. Receive follow-up notifications each time a consultation is around the corner.',
    icon: Star,
    accentClass: 'text-amber-500',
    accentBgClass: 'bg-amber-500/10',
    glowClass:
      'before:absolute before:top-0 before:right-0 before:h-32 before:w-32 before:rounded-full before:bg-amber-300/20 before:blur-2xl',
    featured: true,
  },
];
