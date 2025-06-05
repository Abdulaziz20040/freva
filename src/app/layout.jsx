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
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Freva",
              url: "https://your-domain.com",
              logo: "https://your-domain.com/logo.png",
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
