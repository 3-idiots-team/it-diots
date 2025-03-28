import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));

          supabaseResponse = NextResponse.next({ request });

          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Redirect if no user and the path is not auth
  if (!user && !request.nextUrl.pathname.startsWith('/onboarding')) {
    const url = request.nextUrl.clone();
    url.pathname = '/onboarding';

    return NextResponse.redirect(url);
  }

  // Redirect authenticated users trying to access /auth/* paths
  if (user && request.nextUrl.pathname.startsWith('/onboarding')) {
    const url = request.nextUrl.clone();
    url.pathname = '/';

    return NextResponse.redirect(url);
  }

  // Default response if no conditions match
  return NextResponse.next();
}
