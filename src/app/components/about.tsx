import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-20"></div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl border">
              <Image src="/placeholder.svg?height=500&width=500" alt="Tu Nombre" fill className="object-cover" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mí</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Soy un desarrollador web full stack apasionado por el aprendizaje y la mejora continua.
                Me destaco por mi versatilidad, compromiso y excelencia en cada proyecto que emprendo. 
                Tengo experiencia en desarrollo web, inversión y emprendimiento, aplicando metodologías de 
                productividad y crecimiento personal. 
              </p>
              <p>
                Mi viaje en el desarrollo web comenzó hace 4 años, y desde entonces he trabajado en diversos proyectos
                que me han permitido perfeccionar mis habilidades técnicas y mi capacidad para resolver problemas
                complejos.
              </p>
              <p>
                Cuando no estoy programando, disfruto de leer, meditar y jugar futbol. Creo firmemente que estas
                actividades complementan mi trabajo como desarrollador, aportando creatividad y perspectiva a mis
                proyectos.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href="/public/cv/cv-jhonllanos.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}