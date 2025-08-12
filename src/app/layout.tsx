import "./globals.css";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Password Generator - Secure, Smart, Unique",
  description:
    "Generate strong, smart, and unique passwords instantly with our secure password generator.",
  keywords: ["password generator", "secure passwords", "random password", "strong password"],
  authors: [{ name: "arturylab", url: "https://password-generator-arturylab.vercel.app/" }],
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: "Password Generator - Secure, Smart, Unique",
    description: "Generate strong, smart, and unique passwords instantly with our secure password generator.",
    url: "https://password-generator-arturylab.vercel.app/",
    siteName: "Password Generator by arturylab",
    images: [
      {
        url: "https://password-generator-arturylab.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Password Generator - Secure, Smart, Unique",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@arturylab",
    title: "Password Generator - Secure, Smart, Unique",
    description: "Generate strong, smart, and unique passwords instantly with our secure password generator.",
    images: ["https://password-generator-arturylab.vercel.app/og-image.png"],
  },
  metadataBase: new URL("https://password-generator-arturylab.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>

        <footer>
          <div className="container mx-auto py-4 text-center flex justify-center items-center gap-2">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} arturylab. All rights reserved.
            </p>
            <a
              href="https://github.com/arturylab/password-generator"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Button>
                <Github size={20} />GitHub
              </Button>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
