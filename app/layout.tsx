import type { Metadata, Viewport } from "next";
import { Poppins, Playball } from "next/font/google";
import "./globals.css";

// Font configurations
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playball = Playball({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playball",
});

export const metadata: Metadata = {
  title: "Cader Rahmathulla | Investor, CEO, Visionary Leader",
  description: "Driving growth across sectors through purpose-led leadership",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      
      <body className={`${poppins.variable} ${playball.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
