import '@radix-ui/themes/styles.css';
import './theme-config.css';
import "./globals.css";
import { inter } from '@/app/config/font';
import siteConfig from './config/site';
import { Providers } from './providers';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" title={`${siteConfig.title}`}>
      <body className={inter.variable}>
          <Providers>
            <main>{children}</main>
          </Providers>
      </body>
    </html>
  );
}
