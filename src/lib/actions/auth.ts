'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { jwtDecode } from 'jwt-decode';

import axios from '@/utils/axios';
import { API_PATH, PATH_AFTER_LOGIN } from '@/routes/paths';
import type { UserRole } from '@/types/user';

const FormState = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function authenticate(
  _prevState: string | null | undefined,
  formData: FormData
): Promise<string | undefined> {
  const validatedFields = FormState.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return 'Invalid credentials';
  }

  const { email, password } = validatedFields.data;

  let isAuthenticate = false;
  try {
    const { status, data } = await axios.post<{
      token: string;
    }>(API_PATH.login, {
      email,
      password,
    });

    if (status === 200 && data.token) {
      const { id: userId } = jwtDecode<{ id: string; role: UserRole }>(
        data.token
      );

      const cookieStore = cookies();

      cookieStore.set('token', data.token);
      cookieStore.set('userId', userId);

      isAuthenticate = true;
    }
  } catch (error) {
    console.error('error => ', error);

    return error ? JSON.stringify(error) : 'Failed to sign in';
  } finally {
    if (isAuthenticate) {
      redirect(PATH_AFTER_LOGIN);
    }
  }
}
