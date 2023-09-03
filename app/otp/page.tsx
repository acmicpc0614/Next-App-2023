"use client";
import Link from "next/link";
import Image from "next/image";
import NEXTNegroSloganRosado from "/public/NEXTNegroSloganRosado.png";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const supabase = createClientComponentClient();
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  const [otp, setOtp] = useState("");

  const validateOtp = async () => {
    // get email from query params

    if (!email) {
      console.log("No email found");
      return;
    }

    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "email",
    });

    if (error) {
      console.log(error);
    } else {
      // redirect to codes page
      window.location.href = "/codes";
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full  sm:max-w-md justify-center gap-2 bg-gradient-to-t from-[#6460FF] to-[#0600FF]">
      <Link
        href="/"
        className="absolute left-8 top-8 pt-2 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1 text-white"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Atrás
      </Link>

      <div className="flex w-full justify-center content-center pt-5">
        <Image
          src={NEXTNegroSloganRosado}
          quality={100}
          alt="Next logo"
          className="mt-10"
        />
      </div>

      <div
        style={{
          backgroundColor: "#6460FF",
        }}
        className="text-white p-5 w-11/12 rounded-r-xl space-y-6 self-start"
      >
        <h1 className="font-extrabold text-4xl">
          ENVIAMOS TU CÓDIGO AL CORREO
        </h1>

        <p className="text-sm">
          Revisa tu correo electrónico y sigue las instrucciones para empezar tu
          recorrido y participar por increíbles premios.
        </p>
      </div>

      <form
        className="flex-1 flex flex-col w-full gap-2 text-foreground px-8 mt-10"
        action={validateOtp}
      >
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className="text-white">-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            marginTop: "20px",
            marginBottom: "20px",
            color: "black",
          }}
          inputType="number"
          inputStyle={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid rgba(0,0,0,0.3)",
            width: "40px",
            fontSize: "20px",
            boxSizing: "border-box",
            backgroundColor: "white",
            color: "black",
          }}
        />
        <button
          className="bg-green-700 rounded-xl px-4 py-2 text-white mb-2 font-bold"
          style={{
            backgroundColor: "#FF0086",
          }}
        >
          EMPEZAR MI RECORRIDO
        </button>
      </form>
    </div>
  );
}
