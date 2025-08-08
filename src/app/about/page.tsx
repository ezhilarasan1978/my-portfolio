// app/about/page.tsx
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-6">
        {/* <Image
          src="/profile.jpg"
          alt="Ezhil"
          width={140}
          height={140}
          className="rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform"
        /> */}
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          Blending GIS expertise with full-stack development to craft scalable, modern, and impactful solutions.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Professional Profile */}
        <Card className="p-8 h-full bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all rounded-2xl relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Professional Profile
          </h2>
          <Separator className="bg-gradient-to-r from-blue-400 to-blue-600 h-[2px] mb-6" />
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-gray-900 dark:text-white">Result-driven Consultant and GIS specialist</span> with strong full-stack development experience. Expert in GE Smallworld (Electric Office, GSS, GSA) and proficient in Magik, Java, JavaScript, SQL, React, Angular, Spring Boot, and Express. Experienced in designing scalable microservices, data migration tools, and real-time web/mobile integrations with Smallworld GIS.
          </p>
        </Card>

        {/* My Approach */}
        <Card className="p-8 h-full bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all rounded-2xl relative overflow-hidden group">
          <div className="absolute -left-10 -top-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            My Approach
          </h2>
          <Separator className="bg-gradient-to-r from-blue-400 to-blue-600 h-[2px] mb-6" />
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            I build <span className="font-semibold text-gray-900 dark:text-white">practical, maintainable software</span> that helps utilities and GIS teams work faster and more accurately. I enjoy tackling messy data integration challenges — designing validation pipelines, automations, and microservices that replace fragile file-based flows.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            My background blends deep domain knowledge of Smallworld with modern backend and frontend tooling, bridging the gap between legacy GIS platforms and modern web/mobile experiences.
          </p>
        </Card>
      </div>

      {/* Career Highlights Timeline */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Career Highlights
        </h2>
        <div className="relative border-l border-blue-200 dark:border-blue-900 ml-4 space-y-8">
          {[
            { year: "2025", text: "Led migration of utility GIS systems to modern microservices architecture." },
            { year: "2023", text: "Built real-time data validation pipeline for spatial database updates." },
            { year: "2021", text: "Developed GIS-integrated web dashboard for asset tracking." }
          ].map((item, index) => (
            <div key={index} className="ml-8">
              <div className="absolute -left-[10px] w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
              <p className="font-semibold text-blue-700 dark:text-blue-400">{item.year}</p>
              <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'GE Smallworld Suite', color: 'from-blue-500 to-blue-700' },
            { name: 'Full Stack Development', color: 'from-purple-500 to-purple-700' },
            { name: 'GIS Integration', color: 'from-emerald-500 to-emerald-700' },
            { name: 'Microservices', color: 'from-amber-500 to-amber-700' },
            { name: 'Data Migration', color: 'from-indigo-500 to-indigo-700' },
            { name: '3D Visualization', color: 'from-pink-500 to-pink-700' },
            { name: 'Spatial Databases', color: 'from-teal-500 to-teal-700' },
            { name: 'Web/Mobile Apps', color: 'from-rose-500 to-rose-700' }
          ].map((skill) => (
            <div key={skill.name} className="
              bg-white/80 dark:bg-gray-800/60 backdrop-blur-md p-5 rounded-xl text-center
              border border-gray-200/50 dark:border-gray-700
              shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1
              relative overflow-hidden group
            ">
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 -z-10 transition-opacity duration-500 rounded-xl`}></div>
              <span className={`font-medium text-lg bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed -right-20 top-1/4 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed -left-20 bottom-1/4 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl -z-10"></div>
    </div>
  )
}
