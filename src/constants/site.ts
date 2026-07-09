export const SITE_NAME = 'MyDoctorCapsule';
export const SITE_TAGLINE =
  "India's leading healthcare digital growth ecosystem for forward-thinking clinicians.";

export const VIEWPORT_ANIMATION = {
  once: true,
  amount: 0.2,
} as const;

export const STATS = [
  { value: 2400, suffix: '+', label: 'Healthcare Providers', icon: 'building' as const },
  { value: 180, suffix: 'K+', label: 'Patient Appointments', icon: 'calendar' as const },
  { value: 4.9, suffix: '*', label: 'Average Platform Rating', icon: 'star' as const, decimals: 1 },
  { value: 67, suffix: '%', label: 'Avg. Practice Growth', icon: 'trending' as const },
] as const;

export const TRUST_INDICATORS = [
  'Real-Time Analytics Dashboard',
  'Setup in under 10 minutes',
  'DISHA Compliance',
] as const;

export const SPECIALTIES = [
  { name: 'Pediatrics', icon: 'baby' as const },
  { name: 'Pathology', icon: 'flask' as const },
  { name: 'Dentistry', icon: 'smile' as const },
  { name: 'Ophthalmology', icon: 'eye' as const },
  { name: 'General Medicine', icon: 'activity' as const },
  { name: 'Cardiothoracic', icon: 'heart' as const },
  { name: 'Gynecology', icon: 'users' as const },
  { name: 'Dermatology', icon: 'shield' as const },
] as const;

export const WORKFLOW_STEPS = [
  {
    id: 'profile',
    title: 'Create Your Verified Profile',
    description:
      'Set up your professional profile with credentials, specialties, and clinic details. Get verified and listed across Google, Practo, and health directories.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&fit=crop',
  },
  {
    id: 'acquisition',
    title: 'Launch Patient Acquisition',
    description:
      'Activate SEO, Google Maps visibility, and lead capture forms. Start receiving patient inquiries through multiple channels automatically.',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&fit=crop',
  },
  {
    id: 'automate',
    title: 'Automate Appointments & Follow-ups',
    description:
      'Enable online booking, WhatsApp reminders, and automated follow-ups. Reduce no-shows and keep your calendar full without manual effort.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&fit=crop',
  },
  {
    id: 'scale',
    title: 'Measure & Scale',
    description:
      'Your dashboard shows exactly which channels bring patients, what your ROI is, and where to double down. Data-driven decisions fuel consistent monthly growth.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&fit=crop',
  },
] as const;

export const MOBILE_FEATURES = [
  { label: 'Real-time appointment alerts & patient notifications', icon: 'bell' as const },
  { label: 'Instant WhatsApp & SMS follow-up automation', icon: 'message' as const },
  { label: 'Live practice analytics at a glance', icon: 'chart' as const },
  { label: 'Two-way calendar sync with Google & Outlook', icon: 'sync' as const },
  { label: 'Works offline - syncs when you reconnect', icon: 'wifi' as const },
  { label: 'Biometric login & encrypted patient records', icon: 'lock' as const },
] as const;

export const ABOUT_STATS = [
  { title: 'Founded', value: '2022, Bangalore' },
  { title: 'Cities', value: '18 across India' },
  { title: 'Team', value: '120+ people' },
] as const;

export const FOOTER_LINKS = {
  platform: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#cta' },
    { label: 'Integrations', href: '#' },
    { label: 'Changelog', href: '#' },
    { label: 'API Docs', href: '#' },
  ],
  specialties: [
    { label: 'Cardiologists', href: '#' },
    { label: 'Dermatologists', href: '#' },
    { label: 'Pediatricians', href: '#' },
    { label: 'Orthopedic', href: '#' },
    { label: 'Gynecologists', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press Kit', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'DISHA Compliance', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
} as const;

export const CTA_META = [
  'Setup in under 10 minutes',
  'DISHA Compliant',
  'Cancel anytime',
] as const;
