import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { UserProvider } from "@/context/UserContext";
import { getUser } from "@/services/actions/auth-actions";
import { User } from "@prisma/client";

export const dynamic = "force-dynamic";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login App",
  description: "Aplicacao de authenticacao com prisma ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const user = await getUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <UserProvider> */}
        <Header />
        {/* <Header />  */}
        {children}
        {/* </UserProvider> */}
      </body>
    </html>
  );
}
