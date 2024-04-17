import "./globals.css";
import 'aos/dist/aos.css'; 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100">{children}</body>
    </html>
  )
}