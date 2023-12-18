import Link from "next/link";
import Head from "next/head";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 | LeyiBin</title>
                <meta property="og:title" content="404 | LeyiBin" />
                <meta name="description" content="Uh? You're not supposed to be here." />
                <meta property="og:description"
                    content="Uh? You're not supposed to be here." />
                <meta property="og:image" content="/logo-192.png" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </Head>
            <div className="min-h-screen bg-primary text-quaternary flex flex-col items-center justify-center gap-8">
                <h2 className="text-5xl font-bold">
                    404 | Not Found
                </h2>
                <p className="text-xl font-medium text-quaternary/80">
                    Uh? You&apos;re not supposed to be here.
                </p>
                <Link
                    href="/"
                    className="flex flex-row gap-2 bg-secondary duration-300 hover:bg-secondary/60 rounded-lg px-7 py-1.5"
                >
                    <HomeIcon className="h-6 w-6" /> <span className="font-medium text-lg">Go back home</span>
                </Link>
            </div>
        </>
    )
}