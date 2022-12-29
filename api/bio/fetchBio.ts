import { Bio } from '@app/types/bios';
import { API_URL } from '../constants';

export async function fetchBio(): Promise<Bio> {
  const response = await fetch(`${API_URL}/bios/first`);
  const data = await response.json();

  return data;
}
