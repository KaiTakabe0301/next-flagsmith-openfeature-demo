import flagsmith from "flagsmith/isomorphic";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactElement } from "react";
import "./globals.css";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const flagsmithState = await flagsmith
    .init({
      // fetches flags on the server
      environmentID: "EuAfFiumzd5hkiNLU49zTt", // substitute your env ID
      api: "http://localhost:8000/api/v1/",
    })
    .then(() => {
      return flagsmith.getState();
    });
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider flagsmithState={flagsmithState}>
          {children as ReactElement}
        </Provider>
      </body>
    </html>
  );
}
