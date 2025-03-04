import type { Metadata } from "next";
import {IBM_Plex_Sans} from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider, SignIn,SignedOut,SignedIn } from "@clerk/nextjs";

import "./globals.css";





const IBMPlex=IBM_Plex_Sans({
  subsets:["latin"],
  weight:['400','500','600','700'],
  variable:'--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <div className="">
                <SignIn routing="hash"/>
              </div>
            </div>   
          </SignedOut> 
          <SignedIn>
            {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
