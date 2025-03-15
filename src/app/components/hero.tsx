import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hola, soy <span className="gradient-text">Tu Nombre</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Desarrollador Web Full Stack especializado en crear experiencias digitales excepcionales
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild size="lg">
              <Link href="#projects">
                Ver proyectos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contactar</Link>
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:tu@email.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -z-10 top-0 left-0 right-0 h-full overflow-hidden opacity-20">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-20 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  )
}
