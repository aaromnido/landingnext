import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <main className="bg-[#111827] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-gray-900 z-0"></div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center leading-tight">
            Pricing Plans for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">GitMergeTool</span>
          </h1>
          <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto text-center font-light">
            Choose the plan that best fits your needs and start resolving Git conflicts with ease.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Plan Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PlanCard
            title="Basic"
            price="Free"
            features={[
              "Up to 5 repositories",
              "Basic conflict resolution",
              "Community support"
            ]}
          />
          <PlanCard
            title="Pro"
            price="$19/month"
            features={[
              "Unlimited repositories",
              "Advanced conflict resolution",
              "Intelligent code analysis",
              "Priority support"
            ]}
          />
          <PlanCard
            title="Enterprise"
            price="Contact us"
            features={[
              "All Pro features",
              "On-premise deployment",
              "Custom integrations",
              "24/7 support"
            ]}
          />
        </div>
      </section>
    </main>
  )
}

function PlanCard({ title, price, features }: { title: string, price: string, features: string[] }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-900 transition-colors duration-300 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-6">{price}</p>
      <ul className="text-left mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <Check className="mr-2 h-5 w-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
        Choose plan
      </Button>
    </div>
  )
}