import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Palette, Server } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: "Lenguajes",
      icon: <Layout className="h-8 w-8 mb-4 text-blue-500" />,
      skills: [
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Java",
        "Python"
      ],
    },
    {
      id: 2,
      title: "Frontend Frameworks & Librerias",
      icon: <Server className="h-8 w-8 mb-4 text-green-500" />,
      skills: ["React","Vite", "Next.js", "Redux", "Tailwind CSS", "Boostrap"],
    },
    {
      id: 3,
      title: "Backend & APIs",
      icon: <Code className="h-8 w-8 mb-4 text-yellow-500" />,
      skills: ["Node.js", "Express", "NestJS", "TypeORM", "Swagger", "RESTful APIs", "Flask", "Django"],
    },
    {
      id: 4,
      title: "Bases de Datos",
      icon: <Database className="h-8 w-8 mb-4 text-yellow-500" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLITE"],
    },
    {
      id: 5,
      title: "Herramientas y DevOps",
      icon: <Code className="h-8 w-8 mb-4 text-purple-500" />,
      skills: ["Git", "GitHub", "Docker", "CI/CD", "Jest", "Webpack", "Vite"],
    },
    {
      id: 6,
      title: "Diseño & UX/UI",
      icon: <Palette className="h-8 w-8 mb-4 text-pink-500" />,
      skills: ["Figma", "Responsive Design", "UI/UX", "Inkscape"],
    },
    {
      id: 7,
      title: "Plataformas y otros",   
      icon: <Globe className="h-8 w-8 mb-4 text-indigo-500" />,
      skills: ["Vercel", "Netlify", "SEO", "Google Analytics"],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mt-5 pt-5 pb-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Habilidades</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un conjunto de tecnologías y herramientas que domino y utilizo para crear soluciones web modernas y
            eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.id} className="transition-all duration-300 hover:shadow-md">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
