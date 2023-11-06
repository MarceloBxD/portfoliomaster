import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/contexts/useContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcelo Bracet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <AppProvider>
        <body className={inter.className}>{children}</body>
      </AppProvider>
    </html>
  );
}
