"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import Image from "next/image";
import Duck from "/public/duck-spinning.gif";

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
              winning_timestamp: currentTimestamp,
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
    <div>
      <h1>SIII FELICIDADES SIIIII</h1>

      <p>Pille su codigo </p>

      <p>{winnerCode}</p>

      <Image src={Duck} alt="duck" />
    </div>
  );
};

export default Winner;
