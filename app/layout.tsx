import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MorisMetrics | Automated BI for Mauritian SMEs',
  description: 'Automated Business Intelligence platform for Mauritian SMEs, providing zero-touch data visualization and reporting.',
  keywords: ['BI', 'Business Intelligence', 'Mauritius', 'SME', 'Data Visualization'],
  openGraph: {
    title: 'MorisMetrics | Automated BI for Mauritian SMEs',
    description: 'Automated Business Intelligence platform for Mauritian SMEs',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="bg-ocean text-white font-sans antialiased selection:bg-teal selection:text-ocean">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}