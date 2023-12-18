import Head from "next/head";
import PasteBox from "@/components/PasteBox";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

type PasteData = {
  id: string;
  lang: string;
  title: string;
};

export default function Personal() {
  const [storedPastes, setStoredPastes] = useState<PasteData[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = JSON.parse(localStorage.getItem("pastes") || "[]");
      setStoredPastes(storedData);
    }
  }, []);

  return (
    <>
      <Head>
        <title>LeyiBin | My pastes</title>
        <meta property="og:title" content="LeyiBin | My Pastes" />
        <meta
          name="description"
          content="Check out your recent pastes on LeyiBin!"
        />
        <meta
          property="og:description"
          content="Check out your recent pastes on LeyiBin!"
        />
        <meta property="og:image" content="/logo-192.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <div className="min-h-screen bg-primary text-quaternary flex flex-col items-center gap-10 py-10">
        <Layout />

        <div className="lg:px-16 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {storedPastes.length > 0 ? storedPastes?.map((paste: PasteData) => (
            <PasteBox
              key={paste.id}
              id={paste.id}
              lang={paste.lang}
              title={paste.title}
            />
          )) : <h3 className="text-2xl font-bold">No pastes found!</h3>}
        </div>
      </div>

      <Footer />
    </>
  );
}
