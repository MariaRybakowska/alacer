import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: {
    default:
      "Alacer - Panele Akustyczne | Wykończenia Wnętrz | Doradztwo Akustyczne",
    template: "%s | Alacer",
  },
  description:
    "Wykończenia wnętrz panelami ściennymi i sufitowymi. Akustyka wnętrz prywatnych i publicznych. Panele akustyczne, doradztwo akustyczne, analiza akustyczna. Alacer - ekspert w akustyce wnętrz.",
  keywords: [
    "akustyka",
    "panele akustyczne",
    "panele wykończenia",
    "alacer",
    "doradztwo akustyczne",
    "analiza akustyczna",
    "wykończenia wnętrz",
    "panele ścienne",
    "panele sufitowe",
    "akustyka wnętrz",
    "systemy akustyczne",
    "panele dźwiękochłonne",
    "wykończenia akustyczne",
    "konsultacje akustyczne",
    "projektowanie akustyczne",
  ],
  authors: [{ name: "Alacer" }],
  creator: "Alacer",
  publisher: "Alacer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alacer.pl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://alacer.pl",
    siteName: "Alacer",
    title:
      "Alacer - Panele Akustyczne | Wykończenia Wnętrz | Doradztwo Akustyczne",
    description:
      "Wykończenia wnętrz panelami ściennymi i sufitowymi. Akustyka wnętrz prywatnych i publicznych. Panele akustyczne, doradztwo akustyczne, analiza akustyczna.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Alacer - Panele Akustyczne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alacer - Panele Akustyczne | Wykończenia Wnętrz",
    description:
      "Wykończenia wnętrz panelami ściennymi i sufitowymi. Akustyka wnętrz prywatnych i publicznych.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual verification code
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://alacer.pl" />
        <meta name="geo.region" content="PL" />
        <meta name="geo.placename" content="Polska" />
        <meta name="geo.position" content="52.2297;21.0122" />
        <meta name="ICBM" content="52.2297, 21.0122" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Alacer",
              url: "https://alacer.pl",
              logo: "https://alacer.pl/logo.png",
              description:
                "Wykończenia wnętrz panelami ściennymi i sufitowymi. Akustyka wnętrz prywatnych i publicznych.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PL",
                addressLocality: "Polska",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+48-884-921-333",
                contactType: "customer service",
                email: "anna.rybakowska@alacer.pl",
              },
              sameAs: ["https://alacer.pl"],
              serviceArea: {
                "@type": "Country",
                name: "Poland",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Usługi Akustyczne",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Panele Akustyczne",
                      description:
                        "Panele ścienne i sufitowe do wykończenia wnętrz",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Doradztwo Akustyczne",
                      description: "Konsultacje i analiza akustyczna wnętrz",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Wykończenia Wnętrz",
                      description:
                        "Kompleksowe wykończenia panelami akustycznymi",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
