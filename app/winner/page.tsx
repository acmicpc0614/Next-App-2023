import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import WinnerPage from "./winner.page";

const CODES = [
  {
    code: "ts3KpUMW",
    company: "Nova",
  },
  {
    code: "gHQS5BoyR2?",
    company: "PolygonUS",
  },
  {
    code: "va5fb4YC",
    company: "Kiwi",
  },
  {
    code: "aW4a4g7X",
    company: "Fun factor",
  },
  {
    code: "842TMZgD",
    company: "Landian meta",
  },
  {
    code: "Rz2zSN5w",
    company: "DSI",
  },
  {
    code: "LP8xFwJe",
    company: "Uriana",
  },
  {
    code: "U9rBKM29",
    company: "Jedburghco",
  },
  {
    code: "9mm6Y3Hn",
    company: "Forzautos",
  },
  {
    code: "BM1bTKg7",
    company: "Nodo",
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
