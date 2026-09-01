import { api } from '@/lib/api';

export interface ContactPayload {
  fullName: string;
  email: string;
  serviceInterestedIn: string;
  description: string;
}

export interface ContactResponse {
  status: number;
  message: string;
  data: {
    received: boolean;
  };
}

const BRAND = 'mydoctorcapsule';

export async function submitContactForm(
  payload: ContactPayload,
): Promise<ContactResponse> {
  return api.post<ContactResponse>('/contact', {
    ...payload,
    brand: BRAND,
  });
}
