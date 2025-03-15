import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Palette, Server } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend",
      icon: <Layout className="h-8 w-8 mb-4 text-blue-500" />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Vue.js",
        "Tailwind CSS",
        "Styled Components",
      ],
    },
    {
      id: 2,
      title: "Backend",
      icon: <Server className="h-8 w-8 mb-4 text-green-500" />,
      skills: ["Node.js", "Express", "Python", "Django", "PHP", "Laravel", "RESTful APIs", "GraphQL"],
    },
    {
      id: 3,
      title: "Bases de Datos",
      icon: <Database className="h-8 w-8 mb-4 text-yellow-500" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Prisma", "Mongoose"],
    },
    {
      id: 4,
      title: "Desarrollo",
      icon: <Code className="h-8 w-8 mb-4 text-purple-500" />,
      skills: ["Git", "GitHub", "CI/CD", "Jest", "Testing Library", "Webpack", "Vite", "Docker"],
    },
    {
      id: 5,
      title: "Diseño",
      icon: <Palette className="h-8 w-8 mb-4 text-pink-500" />,
      skills: ["Figma", "Adobe XD", "Responsive Design", "UI/UX", "Accesibilidad", "Design Systems"],
    },
    {
      id: 6,
      title: "Otros",
      icon: <Globe className="h-8 w-8 mb-4 text-indigo-500" />,
      skills: ["SEO", "PWA", "Serverless", "Jamstack", "Vercel", "Netlify", "AWS", "Google Cloud"],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container">
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
                <div className="flex flex-wrap gap-2 justify-center">
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
