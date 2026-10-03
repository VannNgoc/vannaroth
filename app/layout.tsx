import type { Metadata, Viewport } from "next";
import NavigationBar from "@/ui/NavigationBar";
import { Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vannaroth.com"),
  title: {
    default: "Vannaroth Ngoc — Frontend Developer",
    template: "%s | Vannaroth Ngoc",
  },
  description: "Trying to make the Web a more friendly and welcoming place.",
  authors: [{ name: "Vannaroth Ngoc" }],
  creator: "Vannaroth Ngoc",
  openGraph: {
    title: "Vannaroth Ngoc — Frontend Developer",
    description: "Trying to make the Web a more friendly and welcoming place.",
    url: "https://vannaroth.com",
    siteName: "Vannaroth Ngoc",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vannaroth Ngoc — Frontend Developer",
    description: "Trying to make the Web a more friendly and welcoming place.",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF7",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en" className={cn("h-full", "antialiased", spaceGrotesk.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col mx-auto max-w-360">
        <NavigationBar />
        {children}
        <SpeedInsights />
      </body>
      </html>
  );
}
