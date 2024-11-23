import Link from 'next/link'; // Ana sayfaya dönüş linki için
import Header from '@components/components/Header';
import "../app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning="true">
      <body className='mx-10 bg-blue-100'>
        {/* Header */}
        <Header/>
        {/* Sayfa içerikleri */}
        {children}
      </body>
    </html>
  );
}
