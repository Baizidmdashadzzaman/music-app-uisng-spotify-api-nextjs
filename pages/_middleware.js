import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
   //token will exist if user is logged in 
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;
    //allow the request if following is true
    //if request for next-auth session and provider fething
    //if the token exist
  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  //redirect them to login if they doest have token and requesting a protected route
  if (!token && pathname !== '/login') {
    return NextResponse.redirect('/login');
  }
}