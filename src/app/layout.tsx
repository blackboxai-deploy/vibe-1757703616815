import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uber - Get there with Uber",
  description: "Request a ride, hop in, and go. Choose from a variety of ride options designed to fit your needs and budget.",
  keywords: "uber, ride sharing, taxi, transportation, delivery, food delivery",
  openGraph: {
    title: "Uber - Get there with Uber",
    description: "Request a ride, hop in, and go. Choose from a variety of ride options designed to fit your needs and budget.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}