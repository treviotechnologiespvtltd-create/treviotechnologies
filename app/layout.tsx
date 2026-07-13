import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider";
import CustomCursor from "@/components/ui/custom-cursor";
import FloatingWidgets from "@/components/ui/floating-widgets";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trevio.tech"),
  title: {
    default: "Trevio Technologies — Engineering the Future, One Digital Experience at a Time",
    template: "%s · Trevio Technologies",
  },
  description:
    "Trevio Technologies designs and engineers enterprise software, AI-powered products, and premium digital experiences for ambitious businesses.",
  keywords: [
    "Trevio Technologies",
    "software development company",
    "AI development",
    "custom web development",
    "enterprise software",
    "CRM ERP development",
  ],
  openGraph: {
    title: "Trevio Technologies — Engineering the Future",
    description:
      "We don't build software. We engineer digital experiences. Custom web, AI, and enterprise systems built by Trevio Technologies.",
    url: "https://trevio.tech",
    siteName: "Trevio Technologies",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trevio Technologies — Engineering the Future",
    description: "We don't build software. We engineer digital experiences.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Trevio Technologies",
    url: "https://trevio.tech",
    logo: "https://trevio.tech/logo.png",
    description:
      "Trevio Technologies designs and engineers enterprise software, AI-powered products, and premium digital experiences.",
    email: "treviotechnologies@outlook.com",
    telephone: "+91 78629 27605",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Sales & Marketing",
        telephone: "+91 78629 27605",
        email: "treviotechnologies@outlook.com",
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-void text-ink font-body`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-royal focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <CustomCursor />
            {children}
            <FloatingWidgets />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
