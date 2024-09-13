import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-purple-900">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-xl font-normal">Git<span className="font-bold">Merge</span>Tool</span>
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