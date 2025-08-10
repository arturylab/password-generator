import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Password Generator - Secure, Smart, Unique",
  description:
    "Generate strong, smart, and unique passwords instantly with our secure password generator.",
  keywords: ["password generator", "secure passwords", "random password", "strong password"],
  authors: [{ name: "arturylab", url: "https://yourwebsite.com" }],
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white">
        {children}
        <footer>
          <div className="container mx-auto py-4 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} arturylab. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
