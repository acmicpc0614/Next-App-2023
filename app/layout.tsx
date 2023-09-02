import "./globals.css";
import { Lexend_Deca } from "next/font/google";

export const metadata = {
  title: "Nova / NEXT",
  description: "¡Bienvenido a NEXT!",
};

const lexed = Lexend_Deca({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-lexed',
});

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lexed.className}>
      <body>
        <main className="min-h-screen bg-background flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
