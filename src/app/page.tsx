import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="text-center">
        <div className="relative inline-block">
          <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-blue-600/20 shadow-lg">
            <AvatarImage src="/ez-pic1.jpg" />
            <AvatarFallback className="text-4xl font-bold bg-blue-100 text-blue-800">ES</AvatarFallback>
          </Avatar>
          <div className="absolute -inset-2 rounded-full bg-blue-600/10 -z-10 animate-pulse-slow"></div>
        </div>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Ezhilarasan S</h1>
        <h2 className="text-3xl mb-4 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Consultant | Full Stack Developer | GIS Specialist
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Full Stack Developer with expertise in GE Smallworld and GIS solutions.
        </p>
      </section>

      <Separator className="my-8 bg-blue-100" />

      {/* Education */}
      <Card className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">Education</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-100/50 rounded-full mt-1 text-blue-600">
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
      <Card className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-100/50 rounded-full mt-1 text-blue-600">
              <BriefcaseIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Consultant</h3>
              <p className="text-blue-600 font-medium">Redplanet Spatial Solutions • May 2025 - Present</p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600">
                <li>Specialized in GE Smallworld GIS implementations</li>
                <li>Developed full-stack applications integrating with GIS systems</li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-blue-100" />
          
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-blue-100/50 rounded-full mt-1 text-blue-600">
              <BriefcaseIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Junior Consultant</h3>
              <p className="text-blue-600 font-medium">Redplanet Spatial Solutions • 2023 - April 2025</p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600">
                <li>Built GIS web applications using React and Java</li>
                <li>Implemented data migration tools for spatial databases</li>
                <li>Optimized database performance for large datasets</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">Skills</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">GE Smallworld Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {['Electric Office', 'GSS', 'GSA'].map(skill => (
                <Badge key={skill} variant="secondary" className="px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Programming Languages</h4>
            <div className="flex flex-wrap gap-2">
              {['Magik', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS', 'python'].map(lang => (
                <Badge key={lang} className="px-3 py-1 bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Frameworks & Libraries</h4>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'React Native', 'AngularJS', 'Spring Boot', 'ExpressJS','ELK Stack'].map(fw => (
                <Badge key={fw} className="px-3 py-1 bg-purple-100 text-purple-800 hover:bg-purple-200 border border-purple-200">
                  {fw}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-gray-700">Other Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'GIT', 'GitHub', 'Unit Testing'].map(tool => (
                <Badge key={tool} className="px-3 py-1 bg-green-100 text-green-800 hover:bg-green-200 border border-green-200">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">TNB: Non-Technical Loss</h3>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              <Badge className="bg-blue-100 text-blue-800">GE Smallworld</Badge>
              <Badge className="bg-gray-100 text-gray-800">Java</Badge>
              <Badge className="bg-green-100 text-green-800">Data Integration</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Upgraded web services to replace file-based integration for Customer data imports into GE Smallworld Core</li>
              <li>Developed validation and update tool for data integration and quality assurance</li>
            </ul>
          </div>
          
          <Separator className="bg-blue-100" />
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800">TNB: Advanced Metering</h3>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              <Badge className="bg-blue-100 text-blue-800">Electric Office</Badge>
              <Badge className="bg-purple-100 text-purple-800">Data Pipelines</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Designed reporting and updating systems for customer phase and feeder data</li>
              <li>Ensured seamless integration with GE Smallworld Electric Office</li>
            </ul>
          </div>
          
          <Separator className="bg-blue-100" />
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800">3D GIS Visualization</h3>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              <Badge className="bg-yellow-100 text-yellow-800">JavaScript</Badge>
              <Badge className="bg-orange-100 text-orange-800">WebGL</Badge>
              <Badge className="bg-red-100 text-red-800">Cesium</Badge>
              <Badge className="bg-blue-100 text-blue-800">GIS</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Developed prototype for 3D visualization of GIS data on web</li>
              <li>Integrated with Smallworld GIS for data transfer</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">Certifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50/50 transition-colors">
            <div className="relative w-16 h-16 rounded-md overflow-hidden border border-blue-200">
              <Image 
                src="/java.png" 
                alt="Java Full Stack Certification"
                fill
                className="object-contain bg-white p-1"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Java Full Stack Development</h3>
              <p className="text-sm text-gray-600">Completed certified course in Java Full Stack Development</p>
            </div>
          </div>
          
          <Separator className="bg-blue-100" />
          
          <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50/50 transition-colors">
            <div className="relative w-16 h-16 rounded-md overflow-hidden border border-blue-200">
              <Image 
                src="/sw.png" 
                alt="Smallworld Magik Certification"
                fill
                className="object-contain bg-white p-1"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Smallworld Magik Development</h3>
              <p className="text-sm text-gray-600">RedPlanet Spatial Solutions</p>
            </div>
          </div>
          
          <Separator className="bg-blue-100" />
          
          <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50/50 transition-colors">
            <div className="relative w-16 h-16 rounded-md overflow-hidden border border-blue-200">
              <Image 
                src="/atlas.jpg" 
                alt="ATLAS Training Certification"
                fill
                className="object-contain bg-white p-1"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">ATLAS Training</h3>
              <p className="text-sm text-gray-600">ATLAS Cliffhanger Solutions</p>
            </div>
          </div>

          <Separator className="bg-blue-100" />
          
          <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-blue-50/50 transition-colors">
            <div className="relative w-16 h-16 rounded-md overflow-hidden border border-blue-200">
              <Image 
                src="/iqgeo.png" 
                alt="IQGeo Training Certification"
                fill
                className="object-contain bg-white p-1"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">IQGeo Training</h3>
              <p className="text-sm text-gray-600">IQGEO GROUP LIMITED</p>
            </div>
          </div>
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