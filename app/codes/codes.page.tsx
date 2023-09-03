"use client";
import Link from "next/link";
import Image from "next/image";
import NEXTNegroSloganRosado from "/public/NextLogoRosado.png";
import { Drawer } from "vaul";
import React, { useEffect, useState } from "react";
import { QrReader, OnResultFunction, useQrReader } from "react-qr-reader";
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";

export const CODES = [
  {
    code: "gHQS5BoyR2?",
    company: "Kiwibot",
  },
  {
    code: "123456?",
    company: "Meta",
  },
];

export default function Login() {
  const [data, setData] = useState("No result");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [userCodes, setUserCodes] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<User>();

  const supabase = createClientComponentClient();

  useEffect(() => {
    const getCodes = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        return;
      }

      setCurrentUser(user);

      const { data } = await supabase
        .from("profiles")
        .select("codes")
        .eq("id", user?.id);

      if (data) {
        setUserCodes(data[0].codes);

        // check if the user have all the codes
        const foundAllCodes = CODES.every((code) => {
          return !!data[0].codes.find(
            (c: { code: string }) => c.code === code.code
          );
        });

        if (foundAllCodes) {
          // redirect to the winner page
          window.location.href = "/winner";
        }
      }

      setLoading(false);
    };

    getCodes();
  }, [supabase, setUserCodes]);

  const onScan: OnResultFunction = (result, error) => {
    if (!!result) {
      setData(result?.getText());
      const url = new URL(result?.getText() as string);

      const code = url.searchParams.get("code");

      // find the code in the CODES array
      const foundCode = CODES.find((c) => c.code === code);

      if (!!foundCode) {
        handleSaveCode(foundCode);
      }
    }

    if (!!error) {
      console.info(error);
    }
  };

  const handleSaveCode = async (_code: { code: string; company: string }) => {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    // keep the previous codes
    const codes = [...userCodes];

    // add the new code
    codes.push(_code);

    // update the user profile with the new code
    await supabase.from("profiles").update({ codes }).eq("id", user?.id);

    // reload the page
    window.location.reload();
  };

  const renderCompanyCodes = () => {
    if (loading) {
      return (
        <div className="space-y-2">
          <div className=" shadow rounded-md  max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-full"></div>
            </div>
          </div>
          <div className=" shadow rounded-md  max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-full"></div>
            </div>
          </div>
          <div className=" shadow rounded-md  max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-full"></div>
            </div>
          </div>
          <div className=" shadow rounded-md  max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-full"></div>
            </div>
          </div>
          <div className=" shadow rounded-md  max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-full"></div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        {CODES.map((code) => {
          // check if the user has already scanned this code
          const foundCode = userCodes.find((c) => c.code === code.code);

          const unFoundedCodeClassName = "bg-white rounded-2xl py-4 px-2";
          const foundedCodeClassName =
            "bg-green-400 rounded-2xl py-4 px-2 border-white border-2 text-white font-bold";

          return (
            <div
              className={
                foundCode ? foundedCodeClassName : unFoundedCodeClassName
              }
              key={code.code}
            >
              <h1>{code.company}</h1>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div
      className="w-full h-full min-h-screen justify-center gap-2 bg-gradient-to-t from-[#6460FF] to-[#0600FF]"
      vaul-drawer-wrapper=""
    >
      <Drawer.Root>
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
            backgroundColor: "#FF8378",
          }}
          className="text-white p-5 w-11/12 rounded-r-xl space-y-6 self-start"
        >
          <h1 className="font-extrabold text-4xl">INGRESA LOS CÓDIGOS</h1>

          <p className="text-sm">
            Hola, {currentUser?.user_metadata.full_name}. Ingresa los respectivos
            códigos de todas las marcas para participar por increíbles premios.
          </p>
        </div>

        <form
          className="flex-1 flex flex-col w-full gap-2 text-foreground px-8 mt-10"
          action="/auth/sign-in"
          method="post"
        >
          <div className="text-center">
            <h1 className="text-white font-bold text-xl">
              ESCANEA LOS CÓDIGOS
            </h1>
          </div>

          <Drawer.Trigger asChild>
            <button
              className="bg-green-700 rounded-xl px-4 py-2 text-white mb-2 font-bold"
              style={{
                backgroundColor: "#FF8378",
              }}
            >
              ABRIR SCANER
            </button>
          </Drawer.Trigger>
          {renderCompanyCodes()}
        </form>
        <Drawer.Portal>
          <Drawer.Overlay
            data-testid="ovarlay"
            className="fixed inset-0 bg-black/40"
          />
          <Drawer.Content
            data-testid="content"
            className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0"
          >
            <div className="p-4 bg-white rounded-t-[10px] flex-1">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4">
                  Escanea el código
                </Drawer.Title>

                {loading ? (
                  <div className="flex justify-center items-center ">
                    <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
                    </div>
                  </div>
                ) : (
                  <QrReader
                    constraints={{ facingMode: "environment" }}
                    onResult={onScan}
                    className="w-full h-full"
                    scanDelay={1000}
                  />
                )}
              </div>
            </div>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
