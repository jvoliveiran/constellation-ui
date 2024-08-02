import { Inter, Comfortaa, Roboto } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: '700',
})
 
export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})