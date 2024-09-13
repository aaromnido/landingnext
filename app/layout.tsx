import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GitMergeTool',
  description: 'Resolve Git conflicts with ease on GitHub',
}

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
