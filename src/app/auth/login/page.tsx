import { Metadata } from 'next';
import illustrationLogin from '../../../../public/image/illustration_login.svg';

import Image from '@/components/image/image';

import LoginForm from './login-form';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative flex flex-row w-full p-4 mx-auto space-x-6 md:-mt-32">
        <div className="flex flex-1 w-full p-3 bg-blue-500 rounded-lg">
          <Image
            src={illustrationLogin}
            alt="Login"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* LOGIN FORM SECTION */}
        <div className="flex items-center flex-1">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
