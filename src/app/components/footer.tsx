import Link from "next/link" //Manejamos la navegacion sin recargar la pagina
import { Github, Linkedin, Mail } from "lucide-react"// Libreria de iconos basada en SVG

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold gradient-text">
              Jhon Darwin Llanos Narvaez
            </Link>
            <p className="text-sm text-muted-foreground mt-2">© {currentYear} Todos los derechos reservados</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/darwinllanos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jhonllanosfullstack/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:jhondarwinllanosnarvaez@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Correo</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
