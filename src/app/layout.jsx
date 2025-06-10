import "./globals.css";
import Navbar from "./navbar/page";

export const metadata = {
  title: "Freva",
  description:
    "Freva — Figma dizayn, frontend va veb xizmatlarda tayyorlangan loyihalar va zakaz uchun portfoliolar platformasi.",
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
    <html lang="en">
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

        {/* ✅ SEO uchun strukturaviy ma'lumotlar */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Freva",
              url: "https://freva.uz",
              logo: "https://freva.uz/logo.svg",
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
