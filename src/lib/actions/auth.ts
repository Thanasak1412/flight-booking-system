import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';

import axios from '@/utils/axios';
import { API_PATH } from '@/routes/paths';
import { UserRole } from '@/types/user';

export async function login(email: string, password: string): Promise<any> {
  try {
    const { status, data } = await axios.post<{ token: string }>(
      API_PATH.login,
      {
        email,
        password,
      }
    );

    if (status === 201 && data.token) {
      const cookieStore = cookies();

      const decodedUser = jwtDecode<{ id: string; role: UserRole }>(data.token);

      cookieStore.set('token', data.token);
      cookieStore.set('userId', decodedUser.id);

      return decodedUser;
    }
  } catch (error) {
    console.error('Failed to login: ', error);

    throw new Error('Failed to login.');
  }
}
