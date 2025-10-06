import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { LifePath } from "@/components/exper"

export default function Home() {
  return (
    <div className="web" >
      <Navigation />
      <main>
        <Hero />
        <About />
        <LifePath />
        <Contact />
      </main>
    </div>
  )
}
