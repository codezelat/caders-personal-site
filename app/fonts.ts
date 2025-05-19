import { Poppins, Playball } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const playball = Playball({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-playball',
  display: 'swap',
});