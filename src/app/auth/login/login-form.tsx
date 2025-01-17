'use client';

import { useFormState, useFormStatus } from 'react-dom';

import { ArrowRightIcon } from '@heroicons/react/20/solid';
import {
  AtSymbolIcon,
  ExclamationCircleIcon,
  KeyIcon,
} from '@heroicons/react/20/solid';

import { authenticate } from '@/lib/actions/auth';
import Button from '@/components/button/button';
import { cn } from '@/utils/client';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form className="w-full space-y-3" action={dispatch}>
      <div className="flex-1 px-6 pb-4 rounded-lg bg-gray-50">
        <h1 className="mb-3 text-2xl">Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <label
              className="block mt-5 mb-3 text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className={cn(
                  'peer block w-full rounded-md border border-gray-200',
                  'py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                )}
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon
                className={cn(
                  'pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px]',
                  '-translate-y-1/2 text-gray-500 peer-focus:text-gray-900'
                )}
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="block mt-5 mb-3 text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className={cn(
                  'peer block w-full rounded-md border border-gray-200 py-[9px]',
                  'pl-10 text-sm outline-2 placeholder:text-gray-500'
                )}
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon
                className={cn(
                  'pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px]',
                  '-translate-y-1/2 text-gray-500 peer-focus:text-gray-900'
                )}
              />
            </div>
          </div>
        </div>
        <LoginButton />
        <div
          className="flex items-end h-8 space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className={cn(
        'w-full mt-4 bg-blue-500 hover:bg-blue-400',
        'focus-visible:outline-blue-500 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
      )}
      aria-disabled={pending}
    >
      Log in <ArrowRightIcon className="w-5 h-5 ml-auto text-gray-50" />
    </Button>
  );
}
