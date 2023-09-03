import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const name = String(formData.get("name"));
  const supabase = createRouteHandlerClient({ cookies });

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
      data: {
        name: name,
        full_name: name,
      },
    },
  });

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/login?error=Ups, algo salió mal. Intenta de nuevo ;)`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    );
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/otp?email=${email}`,
    {
      // a 301 status is required to redirect from a POST to a GET route
      status: 301,
    }
  );
}
