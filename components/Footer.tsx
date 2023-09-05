import LogoNova from "../public/LogoNova.png";
import Image from "next/image";

export default function Login() {
    return (
        <div className="flex-col flex items-center text-center w-full justify-center content-center pt-5">
            <p className="font-mono mt-10 text-xs font-light text-white text-center">Powered by:</p>
                <Image
                src={LogoNova}
                quality={100}
                alt="Next logo"
                className="my-2 mx-2"
                />
                <p className="text-sm text-white text-center mb-8">Universidad EAFIT <br />Medellín, Antioquia, Colombia, Suramérica
                <br />© 2023</p>
        </div>
    );
  }