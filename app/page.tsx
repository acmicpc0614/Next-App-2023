import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import landingBackground from "../public/Landing-bg-1.png";
import NextLogoRosado from "../public/NextLogoRosado.png";

import LogoPolygonUs from "../public/LogoPolygonUs.png";
import LogoKiwibot from "../public/kiwibotAzul.png";
import LogoNodo from "../public/LogoNodo.png";
import LoogoLandian from "../public/LoogoLandian.png";
import DSI from "../public/1DSI LOGO NEGRO TRANSPARENTE.png";
import Jed from "../public/1jedburghlogo_logomark_black-f86e850116fe8353d04ea49004bdd492.png";
import Monterrojo from "../public/1logo Monte Rojo 2018-2_Mesa de trabajo 1.png";
import LogoHatsu from "../public/LogoHatsu.png";
import MediaLab from "../public/1LOGO-MEDIALAB.png";
import Apeiron from "../public/1apeironblack.png";
import LogoEafit from "../public/LogoEafit.png";



const sponsors = [
  {
    name: "Kiwibot",
    logo: LogoKiwibot,
  },
  {
    name: "MediaLab",
    logo: MediaLab,
  },

  {
    name: "Landian",
    logo: LoogoLandian,
  },
  {
    name: "Jed",
    logo: Jed,
  },
  {
    name: "Hatsu",
    logo: LogoHatsu,
  },
  {
    name: "DSI",
    logo: DSI,
  },
  {
    name: "Polygon",
    logo: LogoPolygonUs,
  },
  {
    name: "Monte",
    logo: Monterrojo,
  },
  {
    name: "Nodo",
    logo: LogoNodo,
  },
  {
    name: "Ape",
    logo: Apeiron,
  },
];

import Link from "next/link";
import Footer from "@/components/Footer";

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
          width={300}
          className="mt-10"
        />

        {user ? (
          <Link href={"/codes"} className="py-5">
            <div className="bg-red-600 w-fit px-5 py-2 rounded-lg">
              <h1 className="text-stone-50 font-bold --font-lexed">CONTINUAR RECORRIDO</h1>
            </div>
          </Link>
        ) : (
          <Link href={"/login"} className="py-5">
            <div className="bg-green-600 w-fit px-5 py-2 rounded-lg">
              <h1 className="text-stone-50 font-bold --font-lexed">EMPEZAR</h1>
            </div>
          </Link>
        )}
      </div>
      <div
        style={{
          backgroundColor: "#0600FF",
        }}
        className=" flex flex-col items-center justify-center space-y-10 pb-20"
      >
        <div className="w-full flex justify-center items-center flex-col px-2">
          <h1 className="--font-lexed font-bold text-white text-2xl text-center">
            FERIA SOBRE TECNOLOGÍA E INNOVACIÓN
          </h1>
        </div>

        <div
          style={{
            backgroundColor: "#FF4800",
          }}
          className="text-white p-5 mt-10 w-11/12 rounded-r-xl self-start"
        >
          <p>
            NEXT es el macroevento de NOVA que se llevará a cabo este próximo
          </p>
          <p className="mt-0 mb-0 pt-0 pb-0 text-xl"> 5
            de septiembre.</p>

          <p className="mt-5">
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
                <div className="w-30 h-30">
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
          <Image
            src={LogoEafit}
            quality={100}
            alt="Eafit logo"
            className="my-2 mx-2 mt-5"
          />
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
