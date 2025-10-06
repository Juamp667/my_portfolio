"use client"

import "../styles/navigation.css"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Sobre mí", href: "#about", index:0 },
  { name: "Experiencia", href: "#exper", index:1 },
  { name: "Contacto", href: "#contact", index:2 },
]

function useScroll(){
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(()=>{
    const handleScroll = ()=>{setScrollPos(window.scrollY)};
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return ()=>{window.removeEventListener("scroll", handleScroll);};
  }, []);

  return scrollPos;
};

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const section_heights = [250,820,1550, 2000]

  const scroll = useScroll();
  return (
    <nav >

      <div className="container">
        
        <div className="name">Juamp</div>

        <div className="buttons">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              style={{cursor:"pointer"}}
              onClick={() => scrollToSection(item.href)}
            >
              {item.name}
            </Button>
          ))}
        </div>
        
      </div>

    </nav>
  )
}
