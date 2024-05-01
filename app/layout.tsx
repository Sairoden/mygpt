// NEXT
import type { Metadata } from "next";

// STYLES
import { Inter } from "next/font/google";
import "./globals.css";

// LIBRARIES
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyGPT",
  description:
    "MyGPT: Your AI language companion. Powered by OPENAI, it enhances your conversations, content creation, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
