import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fortune",
  description: "Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <style>{inter.styles}</style>
      </Head>
      <body className="font-body">{children}</body>
    </html>
  );
}
