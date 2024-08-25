import { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';
import { PATH_AFTER_LOGIN } from './routes/paths';

export const authConfig = {
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl, url } }) {
      const isLoggedIn = !!auth?.user;
      const privateRoutes = !nextUrl.pathname.startsWith('/auth');
      if (privateRoutes) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return NextResponse.rewrite(new URL(PATH_AFTER_LOGIN, url));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
