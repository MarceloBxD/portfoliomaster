import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/contexts/useContext";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcelo Bracet",
  description: "Portfólio Marcelo Bracet",
  keywords: ["Marcelo Bracet", "Marcelo", "Bracet", "Portfólio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <AppProvider>
        <body className={sourceCodePro.className}>{children}</body>
      </AppProvider>
    </html>
  );
}
