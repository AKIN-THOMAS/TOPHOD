import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Landing from "@/components/Landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tabarnacle of Psalms & House of David</title>
        <meta
          name="description"
          content="Greater than a thousand men, Stronger than a nation. One Spirit One Sound"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing />
      </main>
    </>
  );
}
