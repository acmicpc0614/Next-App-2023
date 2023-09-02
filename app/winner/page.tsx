import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import WinnerPage from "./winner.page";

const CODES = [
  {
    code: "gHQS5BoyR2?",
    company: "Kiwibot",
  },
  {
    code: "123456?",
    company: "Meta",
  },
];

export default async function Winner() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    // this is a protected route - only users who are signed in can view this route
    redirect("/");
  }

  const { data } = await supabase
    .from("profiles")
    .select("codes")
    .eq("id", session.user?.id);

  // check if the user have all the codes

  if (!data) {
    return <div>Loading...</div>;
  }

  const foundAllCodes = CODES.every((code) => {
    return !!data[0].codes.find((c: { code: string }) => c.code === code.code);
  });

  if (!foundAllCodes) {
    // redirect to the winner page
    redirect("/codes");
  }

  return <WinnerPage />;
}
