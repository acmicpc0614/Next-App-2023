import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import landingBackground from "../public/Landing-bg-1.png";
import NextLogoRosado from "../public/NextLogoRosado.png";

import LogoKiwibot from "../public/LogoKiwibot.png";
import LogoQuind from "../public/LogoQuind.png";
import LogoBancolombia from "../public/LogoBancolombia.png";
import LogoNodo from "../public/LogoNodo.png";
import LogoHatsu from "../public/LogoHatsu.png";
import LogoPapitas from "../public/LogoPapitas.png";
import LoogoLandian from "../public/LoogoLandian.png";
import LogoPolygonUs from "../public/LogoPolygonUs.png";
import LogoEafit from "../public/LogoEafit.png";
import LogoNova from "../public/LogoNova.png";

const sponsors = [
  {
    name: "Kiwibot",
    logo: LogoKiwibot,
  },
  {
    name: "Quind",
    logo: LogoQuind,
  },
  {
    name: "Bancolombia",
    logo: LogoBancolombia,
  },
  {
    name: "Nodo",
    logo: LogoNodo,
  },
  {
    name: "Hatsu",
    logo: LogoHatsu,
  },
  {
    name: "Papitas",
    logo: LogoPapitas,
  },
  {
    name: "Landian",
    logo: LoogoLandian,
  },
  {
    name: "Polygon",
    logo: LogoPolygonUs,
  },
  {
    name: "Eafit",
    logo: LogoEafit,
  },
];

import Link from "next/link";
export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundColor: "#0600FF",
      }}
    >
      <div
        className="w-full flex flex-col items-center bg-indigo-800 h-4/6 justify-between"
        style={{
          backgroundImage: `url(${landingBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Image
          src={NextLogoRosado}
          quality={100}
          alt="Next logo"
          width={250}
          className="mt-10"
        />

        <Link href={"/login"} className="py-5">
          <div className="bg-green-600 w-fit px-5 py-2 rounded-lg">
            <h1 className="text-stone-50 font-bold --font-lexed">EMPEZAR</h1>
          </div>
        </Link>
      </div>
      <div
        style={{
          backgroundColor: "#0600FF",
        }}
        className=" flex flex-col items-center justify-center space-y-10 pb-20"
      >
        <div className="w-full flex justify-center items-center flex-col px-4">
          <h1 className="--font-lexed font-bold text-white text-2xl text-center">
            FERIA SOBRE TECNOLOGÍA E INNOVACIÓN
          </h1>
        </div>

        <div
          style={{
            backgroundColor: "#FF4800",
          }}
          className="text-white p-5 mt-10 w-11/12 rounded-r-xl space-y-6 self-start"
        >
          <p>
            NEXT es el macroevento de NOVA que se llevará a cabo este próximo 5
            de septiembre.
          </p>

          <p>
            En este evento buscamos acercar la tecnología, la innovación y en
            especial la Inteligencia Artificial a toda la comunidad Eafitense
            por medio de charlas, talleres y stands interactivos para conocer un
            poco más acerca de este mundo digital.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#FF4800",
          }}
          className="text-white p-5 mt-10 w-11/12 rounded-l-xl space-y-6 self-end"
        >
          <div className="space-y-10">
            <div className="flex space-x-4 items-center">
              <div className="bg-blue-700 h-fit w-fit p-4 rounded-full">
                <h1 className="font-bold text-xl">29</h1>
              </div>
              <div>
                <h1 className="font-bold text-xl">AGOSTO</h1>
                <h2 className="font-normal">Expectativa</h2>
                <h3 className="font-light">Plazoleta del 29</h3>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <div className="bg-blue-700 h-fit w-fit p-4 rounded-full">
                <h1 className="font-bold text-xl">30</h1>
              </div>
              <div>
                <h1 className="font-bold text-xl">AGOSTO</h1>
                <h2 className="font-normal">Expectativa</h2>
                <h3 className="font-light">Plazoleta del 29</h3>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <div className="bg-blue-700 h-fit w-fit p-4 rounded-full">
                <h1 className="font-bold text-xl">31</h1>
              </div>
              <div>
                <h1 className="font-bold text-xl">AGOSTO</h1>
                <h2 className="font-normal">Charlas</h2>
                <h3 className="font-light">Auditorios</h3>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <div className="bg-blue-700 h-fit w-fit p-4 rounded-full">
                <h1 className="font-bold text-xl">5 -</h1>
              </div>
              <div>
                <h1 className="font-bold text-xl">SEPTIEMBRE</h1>
                <h2 className="font-normal">EVENTO</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#0600FF",
        }}
      >
        <div
          style={{
            backgroundColor: "#0FAA58",
          }}
          className=" flex flex-col items-center justify-center rounded-t-2xl"
        >
          <div className="w-full flex justify-center items-center flex-col px-4">
            <h1 className="--font-lexed font-bold text-white text-center text-xl py-10">
              CONOCE A NUESTROS PATROCINADORES Y ALIADOS
            </h1>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-10 items-stretch place-content-stretch place-items-center">
              {sponsors.map((sponsor) => (
                <div className="w-24 h-24">
                  <Image
                    src={sponsor.logo}
                    quality={100}
                    alt={sponsor.name}
                    width={100}
                    height={100}
                    className="place-self-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
