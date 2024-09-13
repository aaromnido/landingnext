import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-gradient-to-b from-purple-900 to-purple-950 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-light mb-6">Ready to streamline your Git workflow?</h2>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Join thousands of developers who are already using GitMergeTool to make their lives easier.
        </p>
        <Button className="bg-white text-purple-900 hover:bg-gray-200 text-lg px-8 py-3">
          Get Started for Free
        </Button>
      </div>
    </section>
  )
}