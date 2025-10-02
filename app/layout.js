import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Fortune Sorochi Aribido | Software Developer",
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
  authors: [{ name: "Fortune Sorochi Aribido" }],
  openGraph: {
    title: "Fortune Sorochi Aribido | Software Developer",
    description:
      "Professional software developer specializing in modern web technologies",
    url: "https://fortunesportfolio.vercel.app/",
    siteName: "Fortune Sorochi Aribido Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fortune Sorochi Aribido - Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortune Sorochi Aribido | Software Developer",
    description:
      "Professional software developer specializing in modern web technologies",
    creator: "@FortuneChineny1",
    images: ["/images/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <link
          rel="canonical"
          href="https://www.linkedin.com/in/fortune-sorochi-aribido-6578b8185/"
        />

        <meta name="theme-color" content="#0f172a" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/_next/static/media/your-critical-image.jpg"
          as="image"
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-slate-950 text-white min-h-screen font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
