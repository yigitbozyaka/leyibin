import Head from "next/head";
import PasteViewSection from "@/components/PasteViewSection";
import Loading from "@/components/Loading";
import { GetServerSidePropsContext } from 'next';
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import axios from 'axios';
import Layout from "@/components/Layout";

interface Data {
    id: string,
    lang: string,
    title: string,
    content: string,
    description: string,
}

interface Props {
    data: Data
}

export default function PastePage({ data }: Props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (data) {
            setIsLoading(false);
        }
    }, [data]);

    return (
        <>
            <Head>
                <title>{`${data.title} | LeyiBin`}</title>
                <meta property="og:title" content={`${data.title}`} />
                <meta name="description" content={`Check out this paste about ${data.title}`} />
                <meta property="og:description" content={`Check out this paste about ${data.title}`} />
                <meta property="og:image" content="/logo-192.png" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </Head>

            {isLoading ? (
                <Loading />
            ) : (
                <div className="min-h-screen py-8 bg-primary text-quaternary flex flex-col items-center justify-evenly gap-10">
                    <Layout />
                    <h2 className="text-3xl font-bold underline underline-offset-2">
                        {data.title}
                    </h2>
                    <PasteViewSection lang={data.lang} content={data.content} />
                </div>
            )}

            <Footer />
        </>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { query } = context;
    const paste_id = query.paste;
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/paste?id=${paste_id}`);
        return {
            props: {
                data
            }
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
}
