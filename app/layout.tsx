import './globals.css';
import 'aos/dist/aos.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className="bg-[url('../public/BackgroundOne.svg')">{children}</body>
    </html>
  );
}
