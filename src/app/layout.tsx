import type { Metadata } from "next";
import { StackLabelProvider } from "./context/userContext";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="pt-br">
      <body className={inter.className}>
        <StackLabelProvider>
          {children}
        </StackLabelProvider>
      </body>
    </html>
  );
}
