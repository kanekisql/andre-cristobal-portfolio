import AboutSection from "../components/sections/AboutSection"
import MainLayout from "../layouts/MainLayout"
import Sidebar from "../components/layout/Sidebar"
import ExperienceSection from "../components/sections/ExperienceSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import { useState } from "react"
function Home() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  return (

  <div
    className="relative"
    onMouseMove={(e) =>
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }
  >

   <div
  className="
    pointer-events-none
    fixed
    inset-0
    z-0
    transition-all
    duration-300
  "
      style={{
        background: `
         radial-gradient(
  650px at ${mousePosition.x}px ${mousePosition.y}px,
  rgba(29, 78, 216, 0.14),
  transparent 70%
)
        `,
      }}
    />

    <MainLayout>

      <div className="relative z-10 lg:flex lg:justify-between lg:gap-28">

        <Sidebar />

        <main className="w-full lg:w-[51%] pt-10 pb-24 lg:pt-[72px] lg:pb-32">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
        </main>

      </div>

    </MainLayout>

  </div>

)
}

export default Home