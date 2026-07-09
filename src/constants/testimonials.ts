export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  hospital: string;
  initials: string;
  avatarColor: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      'In 3 months, my new patient inquiries went up by 80%. The platform basically runs itself - I just see more patients.',
    name: 'Dr. Arjun Mehta',
    role: 'Cardiologist',
    hospital: 'Mehta Heart & Vascular, Mumbai',
    initials: 'AM',
    avatarColor: '#1A56DB',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'The WhatsApp follow-up automation alone saves my receptionist 3 hours a day. The ROI is absurd for the price.',
    name: 'Dr. Sneha Pillai',
    role: 'Dermatologist',
    hospital: 'GlowCare Clinic, Bangalore',
    initials: 'SP',
    avatarColor: '#06B6D4',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'My Google reviews went from 18 to 140 in two months. Patients now find me before my hospital website.',
    name: 'Dr. Rahul Srivastava',
    role: 'Orthopedic Surgeon',
    hospital: 'OrthoPlus, Delhi',
    initials: 'RS',
    avatarColor: '#6366F1',
    rating: 5,
  },
  {
    id: '4',
    quote:
      'As a solo practitioner, I needed something I could manage without a team. MDC is genuinely that simple.',
    name: 'Dr. Kavitha Nair',
    role: 'Pediatrician',
    hospital: 'Little Stars Clinic, Chennai',
    initials: 'KN',
    avatarColor: '#10B981',
    rating: 5,
  },
];
