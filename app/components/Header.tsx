import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-purple-900">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
            className="text-purple-500"
          >
            <path
              fill="currentColor"
              d="m227.39 117.81l-51.2-85.33A15.94 15.94 0 0 0 162.73 24h-69.46a15.94 15.94 0 0 0-13.46 8.48l-51.2 85.33a16.07 16.07 0 0 0 0 15.84l51.2 85.33a15.94 15.94 0 0 0 13.46 8.48h69.46a15.94 15.94 0 0 0 13.46-8.48l51.2-85.33a16.07 16.07 0 0 0 0-15.84ZM209 125.65l-51.2 85.33a1.91 1.91 0 0 1-1.6 1h-56.4a1.91 1.91 0 0 1-1.6-1l-51.2-85.33V130l51.2-85.33a1.91 1.91 0 0 1 1.6-1h56.4a1.91 1.91 0 0 1 1.6 1L209 130Z"
            />
          </svg>
          <span className="text-2xl font-bold">GitMergeTool</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-purple-400 font-medium">
            Home
          </Link>
          <Link href="/features" className="hover:text-purple-400 font-medium">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-purple-400 font-medium">
            Pricing
          </Link>
          <Link href="#" className="hover:text-purple-400 font-medium">
            Documentation
          </Link>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex bg-white text-purple-900 border-white hover:bg-purple-100 hover:text-purple-700">
          <Github className="mr-2 h-4 w-4" />
          Install App
        </Button>
      </div>
    </header>
  )
}