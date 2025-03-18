"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, usando un servicio como EmailJS, Formspree, o tu propio backend

    // Simulando un envío
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Resetear el formulario
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
    alert("¡Mensaje enviado con éxito!")
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o simplemente quieres charlar? No dudes en ponerte en contacto conmigo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                  <Link href="mailto:jhondarwinllanosnarvaez@gmail.com" className="hover:underline">
                    jhondarwinllanosnarvaez@gmail.com
                  </Link>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
                  <span>Bogota, Colombia</span>
                </div>

                <div className="flex items-center">
                  <Github className="h-5 w-5 mr-3 text-muted-foreground" />
                  <Link
                    href="https://github.com/darwinllanos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    https://github.com/darwinllanos
                  </Link>
                </div>

                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-3 text-muted-foreground" />
                  <Link
                    href="https://www.linkedin.com/in/jhonllanosfullstack/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    https://www.linkedin.com/in/jhonllanosfullstack/
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input placeholder="Nombre" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Asunto"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Mensaje"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                {/* <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      Enviar mensaje <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button> */}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}