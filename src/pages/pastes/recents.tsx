import Head from "next/head";
import useSWR from "swr";
import axios from "axios";
import PasteBox from "@/components/PasteBox";
import Loading from "@/components/Loading";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

type PasteData = {
  id: string;
  lang: string;
  title: string;
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Recents() {
  const { data, isLoading, error } = useSWR("/api/recents", fetcher);

  return (
    <>
      <Head>
        <title>LeyiBin | Recents Pastes</title>
        <meta property="og:title" content="LeyiBin | Recents Pastes" />
        <meta
          name="description"
          content="Check out the most recent pastes on LeyiBin!"
        />
        <meta
          property="og:description"
          content="Check out the most recent pastes on LeyiBin!"
        />
        <meta property="og:image" content="/logo-192.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      {isLoading && <Loading />}

      <div className="min-h-screen bg-primary text-quaternary flex flex-col items-center gap-10 py-10">
        
        <Layout />

        <div className="lg:px-16 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data?.map((paste: PasteData) => (
            <PasteBox
              key={paste.id}
              id={paste.id}
              lang={paste.lang}
              title={paste.title}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
