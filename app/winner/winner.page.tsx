"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import Image from "next/image";
import NEXTNegroSloganRosado from "/public/NEXTNegroSloganRosado.png";
import Cuadrado from "/public/cuadrado1.png";
import Robot from "/public/Robot4.png";

import Link from "next/link";
const Winner = () => {
  const [loading, setLoading] = useState(true);
  const [winnerCode, setWinnerCode] = useState("");
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getWinnerCode = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data } = await supabase
        .from("profiles")
        .select("winner_code")
        .eq("id", user?.id);

      if (data) {
        // check if the winner code was already generated, if not generate it
        // the winner code must be generated only once and its a string with string length of 6 with chars and numbers
        if (!data[0].winner_code) {
          // generate the winner code
          const winnerCode = Math.random().toString(36).substring(2, 8);
          const currentTimestamp: number = Date.now();

          // update the user profile with the winner code
          await supabase
            .from("profiles")
            .update({
              winner_code: winnerCode,
            })
            .eq("id", user?.id);

          setWinnerCode(winnerCode);
        } else {
          setWinnerCode(data[0].winner_code);
        }
      }

      setLoading(false);
    };

    getWinnerCode();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-1 flex flex-col w-full  min-h-screen sm:max-w-md justify-center gap-2 bg-gradient-to-t from-[#0600FF] to-[#C6B9FF]">
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
      <div className="flex w-full justify-center content-center mt-10">
        <Image src={NEXTNegroSloganRosado} quality={100} alt="Next logo" />
      </div>

      <div
        className="w-full flex flex-col items-start h-full justify-between"
        style={{
          backgroundImage: `url(${Cuadrado.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="ml-4 mt-2">
          <h1 className="text-white font-bold text-2xl drop-shadow-lg	">
            ¡FELICITACIONES!
          </h1>
          <h1 className="text-white font-bold text-2xl drop-shadow-lg	">
            CONSEGUISTE EL
          </h1>
          <h1
            className="text-white font-bold text-4xl drop-shadow-lg	"
            style={{
              color: "#FF0086",
            }}
          >
            PREMIO
          </h1>
        </div>

        <div className="self-end -mt-10">
          <Image
            src={Robot}
            quality={100}
            alt="Mascota"
            className="drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center my-10 px-5">
        <h1 className="text-white font-extrabold text-4xl drop-shadow-2xl">
          TU CÓDIGO{" "}
        </h1>

        <div className="bg-white my-5 w-full p-3 rounded-full text-center">
          <p>wxp3sp</p>
        </div>
      </div>
    </div>
  );
};

export default Winner;
