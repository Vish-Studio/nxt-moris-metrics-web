import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'MorisMetrics | Automated BI for Mauritian SMEs',
  description: 'Automated Business Intelligence platform for Mauritian SMEs, providing zero-touch data visualization and reporting.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Fonts & Icons */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        
        {/* Tailwind CSS Configuration */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
            __html: `
                tailwind.config = {
                    theme: {
                        extend: {
                            colors: {
                                ocean: '#0f172a',
                                deep: '#020617',
                                surface: '#1e293b',
                                teal: '#14b8a6',
                                tealLight: '#5eead4',
                                slate: '#94a3b8',
                            },
                            fontFamily: {
                                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                                serif: ['"Plus Jakarta Sans"', 'sans-serif'],
                            }
                        }
                    }
                }
            `
        }} />
      </head>
      <body className="bg-ocean text-white font-sans antialiased selection:bg-teal selection:text-ocean">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}