import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "sonner";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | King D Music Hub`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Cadenza Music",
    "King D Music Hub",
    "music competition Nigeria",
    "gospel music competition",
    "vocal competition",
    "Christian music",
    "music talent",
    "Cadenza Season 3",
    "Nigeria music",
    "faith music competition",
  ],
  authors: [{ name: "King D Music Hub" }],
  creator: "King D Music Hub",
  publisher: "King D Music Hub",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE_URL,
    title: `${SITE_NAME} | King D Music Hub`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cadenza Music Season 3.0",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | King D Music Hub`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
    creator: "@kingdmusichub",
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: SITE_NAME,
              description: SITE_DESCRIPTION,
              organizer: {
                "@type": "Organization",
                name: "King D Music Hub",
                url: SITE_URL,
              },
              startDate: "2026-07-01",
              endDate: "2026-07-31",
              eventAttendanceMode:
                "https://schema.org/OnlineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "VirtualLocation",
                url: "https://meet.google.com",
              },
              url: SITE_URL,
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-body`}>
        {children}
        <Toaster
          theme="dark"
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#1a1a1a",
              border: "1px solid rgba(244,180,0,0.3)",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
