import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}`}>
        <div className="relative flex flex-col items-end w-full h-[100vh] bg-bgWhiteColor">
          <div className="absolute bottom-0 w-[100vw] h-[61vh] bg-primary rounded-t-lg blur-lg">
          </div>
          <div className="absolute bottom-0 z-10 w-[100vw] h-[60vh] bg-primary rounded-t-lg ">
              {children}
          </div>
        </div>
      </body>
    </html>
  );
}

//
