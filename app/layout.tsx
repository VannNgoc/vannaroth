import type { Metadata, Viewport } from "next";
import NavigationBar from "@/ui/NavigationBar";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vannaroth.com"),
  title: {
    default: "Vannaroth Ngoc — Software Engineer",
    template: "%s | Vannaroth Ngoc",
  },
  description: "Trying to make the Web a more friendly and welcoming place.",
  authors: [{ name: "Vannaroth Ngoc" }],
  creator: "Vannaroth Ngoc",
  openGraph: {
    title: "Vannaroth Ngoc — Software Engineer",
    description: "Trying to make the Web a more friendly and welcoming place.",
    url: "https://vannaroth.com",
    siteName: "Vannaroth Ngoc",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vannaroth Ngoc — Software Engineer",
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
      <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col mx-auto max-w-360">
        <NavigationBar />
        {children}
      </body>
      </html>
  );
}
