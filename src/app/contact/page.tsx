import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import ContactForm from "./ContactForm"

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12 bg-gradient-to-br from-gray-50 to-blue-50/30 min-h-screen">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-bold text-gray-900 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Contact Me
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get in touch via the form or through my other channels below
        </p>
      </div>

      {/* Contact Form */}
      <Card className="p-8 transform transition-all duration-300 hover:scale-[1.01]
        bg-white border border-gray-200/80
        shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_-10px_rgba(59,130,246,0.3)]
        relative overflow-hidden group">
        {/* Decorative elements */}
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/30 rounded-full blur-xl"></div>
        <div className="absolute -left-5 -bottom-5 w-20 h-20 bg-blue-200/20 rounded-full blur-lg"></div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Send Me a Message
          </span>
        </h2>
        <Separator className="bg-gradient-to-r from-blue-400 to-blue-600 h-[2px] mb-6" />

        <div className="relative z-10">
          <ContactForm />
        </div>
      </Card>

      {/* Other contact methods */}
      <Card className="p-8 transform transition-all duration-300 hover:scale-[1.01]
        bg-white border border-gray-200/80
        shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_-10px_rgba(59,130,246,0.3)]
        relative overflow-hidden group">
        {/* Decorative elements */}
        <div className="absolute -left-10 -top-10 w-32 h-32 bg-blue-100/30 rounded-full blur-xl"></div>
        <div className="absolute -right-5 -bottom-5 w-20 h-20 bg-blue-200/20 rounded-full blur-lg"></div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Other Ways to Reach Me
          </span>
        </h2>
        <Separator className="bg-gradient-to-r from-blue-400 to-blue-600 h-[2px] mb-6" />
        <ul className="space-y-3 text-gray-800 relative z-10">
          <li>
            📧 Email:{" "}
            <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
              ezhilarasan1978@gmail.com
            </a>
          </li>
          <li>
            📱 Phone:{" "}
            <a href="tel:+919445899491" className="text-blue-600 hover:underline">
              +91 94458 99491
            </a>
          </li>
          <li>
            💼 LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/ezhilarasan-s" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              linkedin.com/in/ezhilarasan-s
            </a>
          </li>
          <li>
            🐙 GitHub:{" "}
            <a href="https://github.com/ezhilarasan1978" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              github.com/ezhilarasan1978
            </a>
          </li>
        </ul>
      </Card>

      {/* Floating decorative elements */}
      <div className="fixed -right-20 top-1/4 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed -left-20 bottom-1/4 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl -z-10"></div>
    </div>
  )
}
