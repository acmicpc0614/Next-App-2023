import Link from "next/link";
import Messages from "./messages";
import Image from "next/image";
import NEXTNegroSloganRosado from "/public/NEXTNegroSloganRosado.png";
import Footer from "@/components/Footer";


export default function Login() {
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
        <h1 className="font-extrabold text-4xl">BIENVENIDO A NEXT</h1>

        <p className="text-sm">
          Llena este formulario para empezar tu recorrido y participar por
          increíbles premios.
        </p>
      </div>

      <form
        className="flex-1 flex flex-col w-full gap-2 text-foreground px-8 mt-10"
        action="/auth/sign-in"
        method="post"
      >
        <Messages />

        <div className="text-center">
          <h1 className="text-white font-bold text-xl">INGRESA TUS DATOS</h1>
        </div>
        <label className="text-md text-white" htmlFor="name">
          Nombre
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6 text-white"
          name="name"
          placeholder="Pepito Perez"
          required
        />

        <label className="text-md text-white" htmlFor="email">
          Correo electrónico
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6 text-white"
          name="email"
          placeholder="nombre@ejemplo.com"
          required
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

      <div className="px-8 text-center text-white my-5">
        <h1 className="font-bold text-lg">INSTRUCCIONES:</h1>
        <p className="font-normal text-sm">
        Se debe participar en las actividades de cada empresa y conocer sus productos, para así obtener su codigo QR y redimir tu premio, adicionalmente podrás ser parte de la rifas de varias sorpresas.
        <br/> <p className="font-bold">¡Muchas gracias por participar! Ve a la carpa de NOVA para reclamar un obsequio.</p>
        </p>
      </div>
      <Footer/>
    </div>
  );
}
