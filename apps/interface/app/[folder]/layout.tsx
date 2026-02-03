import { Inter } from 'next/font/google';
import './styles.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function FolderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      {children}
    </div>
  );
}
