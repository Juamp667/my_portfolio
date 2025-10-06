import { Mail, Github, Linkedin, FileText, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

import "../styles/contact.css"

export function Contact() {
  return (
    <section id="contact">
      <div>
        <div className="i1">
          <h2 className="text-3xl font-bold mb-8">Contacto</h2>
        </div>
        
        <div className="i2">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Siéntete libre de contactarme o enviarme un mensaje a través de las siguientes vías. Estaré encantado de divagar o colaborar en proyectos relacionados con la física, la programación o el análisis de datos.
              </p>
            </div>

            <div className="mailCont">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">jmpadillagalera@gmail.com</span>
              </div>
            </div>

            <div className="buttonCont">
              <div>
              <a href="https://github.com/Juamp667" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                >
                  <Github className="h-5 w-5" />
                  Github
                </Button>
              </a>
              </div>
              <div>
              <a
                href="https://www.linkedin.com/in/juan-miguel-padilla-galera-03725a228"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                >
                  <Linkedin className="h-5 w-5" />
                  Linkedin
                </Button>
              </a>
              </div>

              <div>
              <a
                href="https://www.linkedin.com/in/juan-miguel-padilla-galera-03725a228"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                >
                  <FileText className="h-5 w-5" />
                  Currículum
                </Button>
              </a>
              </div>

            </div>

            <div className="copy">
              <p className="text-sm text-muted-foreground">
                © 2025 Juan Miguel Padilla Galera. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
      </div>
    </section>
  )
}
