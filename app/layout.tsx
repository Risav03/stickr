import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Background from "@/components/UI/Background";
import Navbar from "@/components/UI/Navbar";
import Providers from "@/utils/Providers/Providers"

const geistSans = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
  const URL = process.env.NEXT_PUBLIC_URL;
  return {
    title: "Test Stickr",
    description:
      "Stickr test add",
    other: {
      "fc:frame": JSON.stringify({
        version: "next",
        imageUrl: "https://stickr-pexg.vercel.app/pfp.png",
        button: {
          title: `Tune in!`,
          action: {
            type: "launch_frame",
            name: "Test Stickr",
            url: URL,
            splashImageUrl: "https://stickr-pexg.vercel.app/pfp.png",
            splashBackgroundColor:
              "#ffffff",
          },
        },
      }),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Background/>
          <Navbar/>
          {children}
        </Providers>

      </body>
    </html>
  );
}
