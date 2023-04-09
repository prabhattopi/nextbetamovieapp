import './globals.css'
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
    weight:['400', '700'],
    subsets:['latin'],
    variable:"--font-montserrat"


})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${montserrat.className} mx-32 my-12 bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
