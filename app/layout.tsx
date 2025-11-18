import type { Metadata } from "next";
import { Poppins, Playball } from "next/font/google";
import "./globals.css";
import { seoProfile, siteUrl } from "./lib/seo";
import GoogleAnalytics from "./Components/GoogleAnalytics";

// Font configurations
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playball = Playball({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playball",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: seoProfile.fullName,
  jobTitle: seoProfile.title,
  url: siteUrl,
  image: `${siteUrl}/images/CaderImage.svg`,
  description: seoProfile.description,
  sameAs: seoProfile.socialProfiles,
  worksFor: {
    "@type": "Organization",
    name: "SITC Group",
  },
  knowsAbout: [
    "SaaS investments",
    "EdTech operations",
    "Infrastructure strategy",
    "Leadership and governance",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "business inquiries",
    email: seoProfile.contactEmail,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${seoProfile.fullName} | ${seoProfile.title}`,
    template: `%s | ${seoProfile.fullName}`,
  },
  description: seoProfile.description,
  keywords: seoProfile.keywords,
  authors: [{ name: seoProfile.fullName }],
  creator: seoProfile.fullName,
  publisher: seoProfile.fullName,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${seoProfile.fullName} | ${seoProfile.title}`,
    description: seoProfile.description,
    siteName: seoProfile.fullName,
    images: [
      {
        url: `${siteUrl}/images/CaderImage.svg`,
        width: 1200,
        height: 630,
        alt: `${seoProfile.fullName} portrait`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${seoProfile.fullName} | ${seoProfile.title}`,
    description: seoProfile.description,
    images: [`${siteUrl}/images/CaderImage.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${poppins.variable} ${playball.variable} font-sans`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
