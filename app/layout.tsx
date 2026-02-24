import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ThemeProvider } from "./ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Royalty Resin Furniture & Interiors",
  description:
    "Innovative furniture crafted by merging premium epoxy with natural wood.",
  openGraph: {
    title: "Royalty Resin Furniture & Interiors",
    description:
      "Luxury epoxy resin and natural wood furniture for B2B and B2C customers.",
    url: "https://royalty-resin.example.com",
    siteName: "Royalty Resin Furniture & Interiors",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to your `public` folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}