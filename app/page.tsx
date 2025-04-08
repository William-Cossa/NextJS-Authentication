import Link from "next/link";

// export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold"> Homepage do site</h1>
      <hr />

      <nav className=" mt-8">
        <Link href="/dashboard" className="text-blue-500">
          Acesse ao Dashboard
        </Link>{" "}
        ou
        <Link href="/cadastro" className="text-blue-500">
          {" "}
          Crie uma conta
        </Link>
      </nav>
    </main>
  );
}
