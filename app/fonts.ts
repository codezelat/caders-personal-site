import { Poppins, Playball } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const playball = Playball({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-playball',
});