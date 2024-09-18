import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Controle Masters",
  description: "Gera um controle de etiquetas masters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className='bg-bgWhiteColor'>
          {children}
      </div>
  );
}
