import { Eye, Github, Brain, Zap, Users, Lock, Puzzle, BarChart, Repeat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "../components/CTASection"

export default function FeaturesPage() {
  return (
    <main className="bg-[#111827] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-gray-900 z-0"></div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center leading-tight">
            Features of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">GitMergeTool</span>
          </h1>
          <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto text-center font-light">
            Discover how GitMergeTool can revolutionize your Git workflow and make conflict resolution easier than ever.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-light mb-12 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Eye className="w-12 h-12 text-purple-500" />}
            title="Visual Conflict Resolution"
            description="Intuitive interface for resolving merge conflicts directly on GitHub."
          />
          <FeatureCard
            icon={<Github className="w-12 h-12 text-purple-500" />}
            title="GitHub Integration"
            description="Works seamlessly within your existing GitHub workflow."
          />
          <FeatureCard
            icon={<Brain className="w-12 h-12 text-purple-500" />}
            title="Intelligent Code Analysis"
            description="Automatic suggestions for resolving conflicts based on code context."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-purple-500" />}
            title="Lightning-Fast Performance"
            description="Resolve conflicts quickly with our optimized algorithms."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-purple-500" />}
            title="Team Collaboration"
            description="Easily involve team members in the conflict resolution process."
          />
          <FeatureCard
            icon={<Lock className="w-12 h-12 text-purple-500" />}
            title="Secure & Private"
            description="Your code stays safe with our enterprise-grade security measures."
          />
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep
              number="1"
              title="Connect Your Repository"
              description="Link your GitHub repository to GitMergeTool with just a few clicks."
            />
            <ProcessStep
              number="2"
              title="Detect Conflicts"
              description="Our tool automatically identifies merge conflicts in your pull requests."
            />
            <ProcessStep
              number="3"
              title="Resolve with Ease"
              description="Use our visual interface to quickly resolve conflicts and merge your code."
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-light mb-12 text-center">Advanced Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AdvancedFeature
            icon={<Puzzle className="w-16 h-16 text-purple-500" />}
            title="Custom Integration"
            description="Integrate GitMergeTool with your existing development tools and workflows for a seamless experience."
          />
          <AdvancedFeature
            icon={<BarChart className="w-16 h-16 text-purple-500" />}
            title="Conflict Analytics"
            description="Gain insights into your team's merge conflict patterns and optimize your development process."
          />
          <AdvancedFeature
            icon={<Repeat className="w-16 h-16 text-purple-500" />}
            title="Automated Conflict Resolution"
            description="Let our AI handle simple conflicts automatically, saving your team valuable time."
          />
          <AdvancedFeature
            icon={<Users className="w-16 h-16 text-purple-500" />}
            title="Code Review Integration"
            description="Seamlessly incorporate conflict resolution into your code review process for better collaboration."
          />
        </div>
      </section>

      <CTASection />
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-900 transition-colors duration-300 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 font-light">{description}</p>
    </div>
  )
}

function ProcessStep({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="text-center">
      <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
        {number}
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 font-light">{description}</p>
    </div>
  )
}

function AdvancedFeature({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-gray-800 rounded-lg p-8 flex items-start hover:bg-gray-900 transition-colors duration-300 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
      <div className="mr-6 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-300 font-light">{description}</p>
      </div>
    </div>
  )
}