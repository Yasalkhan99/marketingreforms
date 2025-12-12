import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Redirect non-www to www for marketingreforms.com
  if (hostname === 'marketingreforms.com') {
    url.host = 'www.marketingreforms.com';
    return NextResponse.redirect(url, 301);
  }

  // Optional: Redirect www.marketingreforms.vercel.app to www.marketingreforms.com in production
  // Uncomment if you want to redirect Vercel deployment URLs
  // if (hostname.includes('marketingreforms.vercel.app') && process.env.NODE_ENV === 'production') {
  //   url.host = 'www.marketingreforms.com';
  //   return NextResponse.redirect(url, 301);
  // }

  return NextResponse.next();
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

