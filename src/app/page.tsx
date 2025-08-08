// app/page.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12 bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="text-center relative">
        <div className="relative inline-block group">
          <Avatar className="w-40 h-40 mx-auto mb-6 border-4 border-white shadow-2xl group-hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.5)] transition-shadow duration-300">
            <AvatarImage src="/ez-pic1.jpg" />
            <AvatarFallback className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-white">ES</AvatarFallback>
          </Avatar>
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-600/20 -z-10 animate-pulse-slow group-hover:opacity-80 transition-opacity"></div>
        </div>
        
        <h1 className="text-6xl font-extrabold text-gray-900 mb-3">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Ezhilarasan S
          </span>
        </h1>
        <h2 className="text-3xl mb-6 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          Consultant | Full Stack Developer | GIS Specialist
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transforming spatial data challenges into elegant software solutions
        </p>
      </section>

      <Separator className="my-8 bg-gradient-to-r from-blue-400 to-blue-600 h-0.5" />

      {/* Education */}
      <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Education
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mt-1 text-blue-600 shadow-inner">
              <GraduationCapIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">B.Tech., Mechanical Engineering</h3>
              <p className="text-gray-600">Shiv Nadar University</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <div className="space-y-6">
        <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Experience
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mt-1 text-blue-600 shadow-inner">
                <BriefcaseIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Consultant</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 font-medium">
                  Redplanet Spatial Solutions • May 2025 - Present
                </p>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600">
                  <li>Specialized in GE Smallworld GIS implementations</li>
                  <li>Developed full-stack applications integrating with GIS systems</li>
                </ul>
              </div>
            </div>
            
            <Separator className="bg-gradient-to-r from-blue-200 to-blue-400 h-[1px]" />
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mt-1 text-blue-600 shadow-inner">
                <BriefcaseIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Junior Consultant</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 font-medium">
                  Redplanet Spatial Solutions • 2023 - April 2025
                </p>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600">
                  <li>Built GIS web applications using React and Java</li>
                  <li>Implemented data migration tools for spatial databases</li>
                  <li>Optimized database performance for large datasets</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skills */}
      <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Skills
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          {[
            { 
              title: "GE Smallworld Expertise", 
              skills: ['Electric Office', 'GSS', 'GSA'],
              color: "from-blue-500 to-blue-700"
            },
            { 
              title: "Programming Languages", 
              skills: ['Magik', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Python'],
              color: "from-purple-500 to-purple-700"
            },
            { 
              title: "Frameworks & Libraries", 
              skills: ['React.js', 'React Native', 'AngularJS', 'Spring Boot', 'ExpressJS', 'ELK Stack'],
              color: "from-emerald-500 to-emerald-700"
            },
            { 
              title: "Other Tools", 
              skills: ['Docker', 'GIT', 'GitHub', 'Unit Testing'],
              color: "from-amber-500 to-amber-700"
            }
          ].map((category, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-medium text-gray-700">
                <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <Badge 
                    key={skill} 
                    className={`px-3 py-1 bg-gradient-to-br ${category.color} text-white hover:shadow-md transition-shadow`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Projects
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {[
            {
              title: "TNB: Non-Technical Loss",
              badges: [
                { text: "GE Smallworld", color: "bg-blue-500" },
                { text: "Java", color: "bg-purple-500" },
                { text: "Data Integration", color: "bg-emerald-500" }
              ],
              points: [
                "Upgraded web services to replace file-based integration for Customer data imports into GE Smallworld Core",
                "Developed validation and update tool for data integration and quality assurance"
              ]
            },
            {
              title: "TNB: Advanced Metering",
              badges: [
                { text: "Electric Office", color: "bg-blue-500" },
                { text: "Data Pipelines", color: "bg-purple-500" }
              ],
              points: [
                "Designed reporting and updating systems for customer phase and feeder data",
                "Ensured seamless integration with GE Smallworld Electric Office"
              ]
            },
            {
              title: "3D GIS Visualization",
              badges: [
                { text: "JavaScript", color: "bg-amber-500" },
                { text: "WebGL", color: "bg-orange-500" },
                { text: "Cesium", color: "bg-red-500" },
                { text: "GIS", color: "bg-blue-500" }
              ],
              points: [
                "Developed prototype for 3D visualization of GIS data on web",
                "Integrated with Smallworld GIS for data transfer"
              ]
            }
          ].map((project, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.badges.map((badge, i) => (
                  <Badge 
                    key={i} 
                    className={`${badge.color} text-white hover:shadow-md transition-shadow`}
                  >
                    {badge.text}
                  </Badge>
                ))}
              </div>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {index < 2 && <Separator className="bg-gradient-to-r from-blue-200 to-blue-400 h-[1px] my-6" />}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Certifications
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              image: "/java.png",
              title: "Java Full Stack Development",
              description: "Completed certified course in Java Full Stack Development"
            },
            {
              image: "/sw.png",
              title: "Smallworld Magik Development",
              description: "RedPlanet Spatial Solutions"
            },
            {
              image: "/atlas.jpg",
              title: "ATLAS Training",
              description: "ATLAS Cliffhanger Solutions"
            },
            {
              image: "/iqgeo.png",
              title: "IQGeo Training",
              description: "IQGEO GROUP LIMITED"
            }
          ].map((cert, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50/50 transition-colors group"
            >
              <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow">
                <Image 
                  src={cert.image} 
                  alt={`${cert.title} Certification`}
                  fill
                  className="object-contain bg-white p-1"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-700 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

// Icon components
function GraduationCapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}