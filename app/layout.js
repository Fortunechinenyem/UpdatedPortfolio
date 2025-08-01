import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fortune Chinenyem | Software Developer & Technical Specialist",
  description:
    "Professional software developer specializing in JavaScript, React, Next.js, and Node.js. Building modern web applications with focus on performance and user experience.",
  keywords: [
    "software developer",
    "web developer",
    "JavaScript developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "portfolio",
    "frontend developer",
    "full stack developer",
    "technical support specialist",
  ],
  authors: [{ name: "Fortune Chinenyem" }],
  openGraph: {
    title: "Fortune Chinenyem | Software Developer",
    description:
      "Professional software developer specializing in modern web technologies",
    url: "https://fortunesportfolio.vercel.app/",
    siteName: "Fortune Chinenyem Portfolio",
    images: [
      {
        url: "https://fortunesportfolio.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fortune Chinenyem - Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortune Chinenyem | Software Developer",
    description:
      "Professional software developer specializing in modern web technologies",
    creator: "@FortuneChineny1",
    images: ["https://x.com/images/twitter-card.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content="Fortune Chinenyem" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <link
          rel="canonical"
          href="https://www.linkedin.com/in/fortune-chinenyem-aribido-6578b8185/"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={metadata.openGraph.url} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        <meta name="theme-color" content="#ffffff" />

        <meta
          name="google-site-verification"
          content="your-verification-code"
        />

        <title>{metadata.title}</title>
        <style>{inter.styles}</style>
      </Head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
