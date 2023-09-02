"use client";
import Link from "next/link";
import Image from "next/image";
import NEXTNegroSloganRosado from "/public/NextLogoRosado.png";
import QRScanner from "@/components/QRScanner";
import { Drawer } from "vaul";

export default function Login() {
  return (
    <div
      className=" justify-center gap-2 bg-gradient-to-t from-[#6460FF] to-[#0600FF]"
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
        <QRScanner />
      </Drawer.Root>
    </div>
  );
}
