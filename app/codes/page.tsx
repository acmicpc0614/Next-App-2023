"use client";
import Link from "next/link";
import Image from "next/image";
import NEXTNegroSloganRosado from "/public/NextLogoRosado.png";
import { Drawer } from "vaul";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function Login() {
  const [data, setData] = useState("No result");

  return (
    <div
      className="w-full h-full justify-center gap-2 bg-gradient-to-t from-[#6460FF] to-[#0600FF]"
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
            Ingresa los respectivos códigos de todas las marcas para participar
            por increíbles premios.
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
          <div className="bg-white rounded-2xl py-4 px-2">
            <h1>Empresa #1</h1>
          </div>
          <div className="bg-white rounded-2xl py-4 px-2">
            <h1>Empresa #1</h1>
          </div>
          <div className="bg-white rounded-2xl py-4 px-2">
            <h1>Empresa #1</h1>
          </div>
          <div className="bg-white rounded-2xl py-4 px-2">
            <h1>Empresa #1</h1>
          </div>
          <div className="bg-white rounded-2xl py-4 px-2">
            <h1>Empresa #1</h1>
          </div>
          <div className="bg-white rounded-2xl py-4 px-2">
            <h1>Empresa #1</h1>
          </div>
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
                  Unstyled drawer for React.
                </Drawer.Title>

                <QrReader
                  constraints={{ facingMode: "environment" }}
                  onResult={(result, error) => {
                    if (!!result) {
                      setData(result?.getText());
                    }

                    if (!!error) {
                      console.info(error);
                    }
                  }}
                  className="w-full h-full"
                />
                <p>{data}</p>
              </div>
            </div>
            <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
              <div className="flex gap-6 justify-end max-w-md mx-auto">
                <a
                  className="text-xs text-zinc-600 flex items-center gap-0.25"
                  href="https://github.com/emilkowalski/vaul"
                  target="_blank"
                >
                  GitHub
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="16"
                    aria-hidden="true"
                    className="w-3 h-3 ml-1"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
                <a
                  className="text-xs text-zinc-600 flex items-center gap-0.25"
                  href="https://twitter.com/emilkowalski_"
                  target="_blank"
                >
                  Twitter
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="16"
                    aria-hidden="true"
                    className="w-3 h-3 ml-1"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
