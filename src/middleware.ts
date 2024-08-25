import { NextRequest, NextResponse } from 'next/server';
import { PATH_AUTH, PATH_AFTER_LOGIN } from '@/routes/paths';

export function middleware(request: NextRequest) {
  const authorization = request.cookies.get('token');
  const userId = request.cookies.get('userId');

  if (authorization && userId) {
    // Continue with the request if the token and userId is present
    if (request.nextUrl.pathname.includes('auth')) {
      const url = request.nextUrl.clone();
      url.pathname = PATH_AFTER_LOGIN;

      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL(PATH_AUTH.login, request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
