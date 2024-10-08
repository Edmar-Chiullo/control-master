import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="relative flex flex-col items-end w-full h-[100vh] bg-bgWhiteColor">
          <div className="absolute bottom-0 w-[100vw] h-[61vh] bg-primary rounded-t-lg blur-lg sm:box-one">
          </div>
          <div className="box-two absolute bottom-0 z-10 w-[100vw] h-[60vh] bg-primary rounded-t-lg">
            {children}
          </div>
        </div>
  );
}

//
