import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Montserrat } from 'next/font/google'
import './globals.css'  // Añade esta línea

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-[#111827] text-white ${montserrat.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
