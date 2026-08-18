import { api } from '@/lib/api';

export interface ContactPayload {
  fullName: string;
  email: string;
  subject: string;
  description: string;
}

const BRAND = 'mydoctorcapsule';

export async function submitContactForm(payload: ContactPayload) {
  await api.post<void>('/contact', { ...payload, brand: BRAND });
}
