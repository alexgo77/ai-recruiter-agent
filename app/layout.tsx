import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Recruiter Agent – Automatisierte Bewerbergewinnung mit KI",
  description:
    "Gewinnen Sie qualifizierte Bewerber vollautomatisch mit KI-gestütztem Telefon-Screening, WhatsApp-Kommunikation und intelligentem Matching. Für Personaldienstleister und HR-Abteilungen.",
  keywords:
    "KI Recruiting, AI Recruiter, automatisierte Bewerbergewinnung, Telefon-Screening, WhatsApp Recruiting",
  openGraph: {
    title: "AI Recruiter Agent – Automatisierte Bewerbergewinnung mit KI",
    description:
      "Gewinnen Sie qualifizierte Bewerber vollautomatisch mit KI-gestütztem Screening.",
    url: "https://ai-recruiter-agent.de",
    siteName: "AI Recruiter Agent",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
