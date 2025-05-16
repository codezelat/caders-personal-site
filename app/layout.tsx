import { poppins, playball } from './fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playball.variable}`}>
      <body className="font-poppins">
        {children}
      </body>
    </html>
  );
}