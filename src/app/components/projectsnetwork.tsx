import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export function Projectsnetwork() {
  const projects = [
    {
      id: 1,
      title: "Landing Comunidad Indirecta",
      description:
        "Comunidad de Copy Trading, donde se comparten señales de trading en tiempo real, permitiendo a los usuarios seguir y replicar las operaciones de traders experimentados.",
      image: "/image/indirecta.webp",
      tags: ["landing", "comunidad", "trading", "crecimiento personal", "club"],
      demoUrl: "https://changeyourlive180.vercel.app/indirecta",
    },
    {
      id: 2,
      title: "Landing Saltos Cuanticos",
      description:
        "Comunidad de desarrollo personal y crecimiento, enfocada en ayudar a los individuos a transformar sus vidas a través de estrategias efectivas y apoyo mutuo.",
      image: "/image/saltoscuanticos.webp",
      tags: ["Crecimiento Integral", "Dropshipping", "Trading", "Comunidad", "Networking"],
      demoUrl: "https://changeyourlive180.vercel.app/saltoscuanticos",
    },
    {
      id: 3,
      title: "Portafolio Networker",
      description:
        "Portafolio diseñado para networkers y profesionales de networking, destacando sus habilidades, experiencias y proyectos relevantes en el ámbito del networking.",
      image: "/image/portafolio.webp",
      tags: ["Networking", "Portafolio", "Profesional"],
      demoUrl: "https://funnelnetworking.vercel.app/",
    },
    {
      id: 4,
      title: "Landing Ecommerce",
      description:
        "Landing page para tiendas online, enfocada en presentar productos de manera atractiva y facilitar la conversión de visitantes en clientes.",
      image: "/image/ecommerce.webp",
      tags: ["Ecommerce", "Landing Page", "Conversion"],
      demoUrl: "",
    },
  ]

  return (
    <section id="projects" className="pt-32 md:pt-40 section-padding bg-muted/30 min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plantillas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Trabaja inteligente no duro, elige el proyecto que mas te guste y contactame para trabajar juntos.
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
