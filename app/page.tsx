import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Component() {
  return (
    <div className={`min-h-screen bg-[#1b1b1f] text-white ${montserrat.className}`}>
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
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
          <Link href="#" className="hover:text-purple-400 font-medium">
            Features
          </Link>
          <Link href="#" className="hover:text-purple-400 font-medium">
            Pricing
          </Link>
          <Link href="#" className="hover:text-purple-400 font-medium">
            Documentation
          </Link>
          <Link href="#" className="hover:text-purple-400 font-medium">
            Support
          </Link>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex bg-white text-purple-900 border-white hover:bg-purple-100 hover:text-purple-700">
          <Github className="mr-2 h-4 w-4" />
          Install App
        </Button>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1b1b1f] to-purple-900 z-0"></div>
          <div className="container mx-auto px-4 py-32 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center leading-tight">
              Resolve Git conflicts <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                with ease on GitHub
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto text-center font-light">
              GitMergeTool is the ultimate GitHub app for developers, designed to simplify and streamline the process of resolving Git conflicts directly within your GitHub workflow.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Install Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-white text-purple-900 border-white hover:bg-purple-100 hover:text-purple-700">
                View Demo
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Why GitMergeTool?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Lightning-fast Resolution</h3>
              <p className="text-gray-300 font-light">Resolve conflicts quickly and efficiently, right within GitHub.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">User-Friendly Interface</h3>
              <p className="text-gray-300 font-light">Intuitive design makes merging conflicts a breeze for all skill levels.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Seamless Integration</h3>
              <p className="text-gray-300 font-light">Works flawlessly with your existing GitHub workflow and tools.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Compatible with your favorite tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "GitHub", logo: "https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" },
              { name: "VS Code", logo: "https://seeklogo.com/images/V/visual-studio-code-logo-449D71944F-seeklogo.com.png" },
              { name: "GitLab", logo: "https://seeklogo.com/images/G/gitlab-logo-757620E430-seeklogo.com.png" },
              { name: "Bitbucket", logo: "https://seeklogo.com/images/B/bitbucket-logo-D072214725-seeklogo.com.png" },
              { name: "Jira", logo: "https://seeklogo.com/images/J/jira-logo-C71F8C0324-seeklogo.com.png" },
              { name: "Slack", logo: "https://seeklogo.com/images/S/slack-logo-DE4445077C-seeklogo.com.png" },
              { name: "Jenkins", logo: "https://seeklogo.com/images/J/jenkins-logo-07C99BD83D-seeklogo.com.png" },
              { name: "Docker", logo: "https://seeklogo.com/images/D/docker-logo-CF97D0124B-seeklogo.com.png" },
            ].map((tool) => (
              <div key={tool.name} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-900 transition-colors duration-300 flex flex-col items-center justify-center border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <Image src={tool.logo} alt={`${tool.name} logo`} width={80} height={80} className="mb-4" />
                <span className="text-xl font-semibold">{tool.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center">What developers are saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"></div>
              <div className="relative z-10">
                <p className="mb-4 text-lg font-light">
                  "GitMergeTool has revolutionized our workflow. Resolving conflicts is now a breeze, saving us countless hours of frustration."
                </p>
                <footer className="font-semibold">- Sarah Johnson, Senior Developer at TechCorp</footer>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"></div>
              <div className="relative z-10">
                <p className="mb-4 text-lg font-light">
                  "As a team lead, GitMergeTool has significantly reduced our merge times and improved code quality. It's a must-have for any development team."
                </p>
                <footer className="font-semibold">- Michael Chen, Lead Developer at InnoSoft</footer>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p className="text-sm">&copy; 2023 GitMergeTool. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}