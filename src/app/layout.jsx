import "./globals.css";
import Navbar from "./navbar/page";

export const metadata = {
  title: "Freva",
  description:
    "Freva — Figma dizayn, frontend, backend, SEO, optimizatsiya va mobil xizmatlar uchun tayyor portfoliolar platformasi.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <head>
        {/* ✅ Google Search Console tasdiq kodi */}
        <meta
          name="google-site-verification"
          content="d8oUgzuv2nyM525NrQ1Z4opmzEk8JMtfsDK7qx1eyug"
        />

        {/* ✅ Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Google Analytics (GA4) tracking kodi */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SRG19VXGT8"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SRG19VXGT8');
            `,
          }}
        />

        {/* ✅ SEO — umumiy ma’lumotlar */}
        <meta
          name="keywords"
          content="freva, figma dizayn, frontend xizmatlari, backend, portfolio, seo, optimizatsiya, mobil ilova, veb dasturlash"
        />
        <meta name="author" content="Freva Team" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Open Graph — ijtimoiy tarmoqlar uchun */}
        <meta
          property="og:title"
          content="Freva — Portfolio va Veb Xizmatlar Platformasi"
        />
        <meta
          property="og:description"
          content="Figma dizayn, frontend, backend, SEO, optimizatsiya va mobil xizmatlar uchun tayyor portfoliolar platformasi."
        />
        <meta property="og:image" content="https://freva.uz/cover.jpg" />
        <meta property="og:url" content="https://freva.uz" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Freva — Portfolio va Veb Xizmatlar"
        />
        <meta
          name="twitter:description"
          content="Dizayn, frontend, backend, SEO, mobil xizmatlar va portfoliolar."
        />
        <meta name="twitter:image" content="https://freva.uz/cover.jpg" />

        {/* ✅ Strukturaviy ma'lumot (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Freva",
              url: "https://freva.uz",
              logo: "https://freva.uz/logo.svg",
              sameAs: [
                "https://t.me/freva_uz",
                "https://www.instagram.com/freva.uz",
              ],
              description:
                "Freva — dizayn, frontend, backend, mobil ilovalar, SEO xizmatlari uchun portfolio va zakaz platformasi.",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
