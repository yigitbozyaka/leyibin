import Head from "next/head";
import Header from "../components/Header";
import TextSection from "@/components/TextSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>LeyiBin | #1 Text & Code Storage Website</title>
        <meta property="og:title" content="LeyiBin | #1 Text Storage Website" />
        <meta
          name="description"
          content="Imagine a website where you can store your texts, codes and much more for free..."
        />
        <meta
          property="og:description"
          content="Imagine a website where you can store your texts, codes and much more for free..."
        />
        <meta property="og:image" content="/logo-192.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <div className="min-h-screen bg-primary text-quaternary flex flex-col items-center justify-evenly">
        <Header />
        <TextSection />
      </div>

      <Footer />
    </>
  );
}
