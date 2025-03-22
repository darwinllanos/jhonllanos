import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "The Three Broomsticks",
      description:
        "Restaurante Inspirado en el mundo de Harry Potter, ofreciendo una experiencia unica a los fans de la saga.",
      image: "/image/the_tree_broomsticks.png",
      tags: ["Vite", "NestJS", "PostgreSQL", "Vercel", "Redux"],
      demoUrl: "https://pf-henry-front-chi.vercel.app/",
      repoUrl: "https://github.com/darwinllanos/PFHENRY-FRONT.git",
    },
    {
      id: 2,
      title: "KEX",
      description:
        "Pagina Web funcional para una empresa referente a la industria metalmecanica",
      image: "/image/kex.png",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demoUrl: "https://kex.com.co/",
      repoUrl: "https://github.com/FerreteriaJRC/kex.com.co/tree/master",
    },
    {
      id: 3,
      title: "Proyecto 3",
      description:
        "Pendiente",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Pendiente"],
      demoUrl: "https://proyecto3.com",
      repoUrl: "https://github.com/tuusuario/proyecto3",
    },
  ]

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Proyectos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de los proyectos en los que he trabajado. Cada proyecto representa un desafío único que me ha
            permitido crecer como desarrollador.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
