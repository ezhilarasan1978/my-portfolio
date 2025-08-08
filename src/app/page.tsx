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
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Section */}
      <section className="text-center">
        <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20">
          <AvatarImage src="/ez-pic1.jpg" />
          <AvatarFallback className="text-4xl font-bold">ES</AvatarFallback>
        </Avatar>
        <h1 className="text-5xl font-extrabold text-primary mb-2">Ezhilarasan S</h1>
        <h2 className="text-3xl mb-4 bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
          Consultant | Full Stack Developer | GIS Specialist
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Full Stack Developer with expertise in GE Smallworld and GIS solutions.
        </p>
      </section>

      <Separator className="my-8" />

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Education</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/10 rounded-full mt-1">
              <GraduationCapIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">B.Tech., Mechanical Engineering</h3>
              <p className="text-muted-foreground">Shiv Nadar University</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/10 rounded-full mt-1">
              <BriefcaseIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Consultant</h3>
              <p className="text-muted-foreground">Redplanet Spatial Solutions • May 2025 - Present</p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Specialized in GE Smallworld GIS implementations</li>
                <li>Developed full-stack applications integrating with GIS systems</li>
              </ul>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/10 rounded-full mt-1">
              <BriefcaseIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Junior Consultant</h3>
              <p className="text-muted-foreground">Redplanet Spatial Solutions • 2023 - April 2025</p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Built GIS web applications using React and Java</li>
                <li>Implemented data migration tools for spatial databases</li>
                <li>Optimized database performance for large datasets</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Skills</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium">GE Smallworld Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {['Electric Office', 'GSS', 'GSA'].map(skill => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Programming Languages</h4>
            <div className="flex flex-wrap gap-2">
              {['Magik', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS', 'python'].map(lang => (
                <Badge key={lang} variant="outline" className="px-3 py-1">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Frameworks & Libraries</h4>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'React Native', 'AngularJS', 'Spring Boot', 'ExpressJS','ELK Stack'].map(fw => (
                <Badge key={fw} variant="outline" className="px-3 py-1">
                  {fw}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Other Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'GIT', 'GitHub', 'Unit Testing'].map(tool => (
                <Badge key={tool} variant="outline" className="px-3 py-1">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">TNB: Non-Technical Loss</h3>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              <Badge variant="secondary">GE Smallworld</Badge>
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">Data Integration</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Upgraded web services to replace file-based integration for Customer data imports into GE Smallworld Core</li>
              <li>Developed validation and update tool for data integration and quality assurance</li>
            </ul>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-xl font-semibold">TNB: Advanced Metering</h3>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              <Badge variant="secondary">Electric Office</Badge>
              <Badge variant="secondary">Data Pipelines</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Designed reporting and updating systems for customer phase and feeder data</li>
              <li>Ensured seamless integration with GE Smallworld Electric Office</li>
            </ul>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-xl font-semibold">3D GIS Visualization</h3>
            <div className="flex flex-wrap gap-2 mt-2 mb-3">
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">WebGL</Badge>
              <Badge variant="secondary">Cesium</Badge>
              <Badge variant="secondary">GIS</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Developed prototype for 3D visualization of GIS data on web</li>
              <li>Integrated with Smallworld GIS for data transfer</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Certifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="relative w-16 h-16 rounded-md overflow-hidden">
              <Image 
                src="/java.png" 
                alt="Java Full Stack Certification"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium">Java Full Stack Development</h3>
              <p className="text-sm text-muted-foreground">Completed certified course in Java Full Stack Development</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="relative w-16 h-16 rounded-md overflow-hidden">
              <Image 
                src="/sw.png" 
                alt="Smallworld Magik Certification"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium">Smallworld Magik Development</h3>
              <p className="text-sm text-muted-foreground">RedPlanet Spatial Solutions</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="relative w-16 h-16 rounded-md overflow-hidden">
              <Image 
                src="/atlas.jpg" 
                alt="ATLAS Training Certification"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium">ATLAS Training</h3>
              <p className="text-sm text-muted-foreground">ATLAS Cliffhanger Solutions</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="relative w-16 h-16 rounded-md overflow-hidden">
              <Image 
                src="/iqgeo.png" 
                alt="IQGeo Training Certification"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium">IQGeo Training</h3>
              <p className="text-sm text-muted-foreground">IQGEO GROUP LIMITED</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Icon components (only those still needed)
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