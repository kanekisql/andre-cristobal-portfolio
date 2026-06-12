import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
function Sidebar() {

  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {

    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }

        })

      },
      {
        threshold: 0.5,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()

  }, [])

  console.log(activeSection)

  return (
    <aside className="w-full lg:w-[40%]">

      <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col pt-[82px] pb-24">

        <div>

          <h1 className="text-[41px] lg:text-[50.5px] font-bold tracking-tight text-slate-200">
            Andre Cristobal
          </h1>

          <h2 className="text-xl mt-1 font-medium text-slate-200">
            Desarrollador Web & Soporte TI
          </h2>

          <p className="mt-4 max-w-xs leading-relaxed text-slate-400">
        Desarrollo aplicaciones web enfocadas en las necesidades de usuarios y empresas.
           </p>

        </div>

        <nav className="mt-16 hidden lg:block">

            <ul className="space-y-6">

              <li>
                <a
                  href="#about"
                  className={`
                    group
                    flex
                    items-center
                    gap-4
                    text-[12px]
                    font-medium
                    tracking-[0.18em]
                    uppercase
                    transition-all
                    duration-300
                    ${
                      activeSection === "about"
                        ? "text-slate-200"
                        : "text-slate-500 hover:text-slate-300"
                    }
                  `}
                >
                  <span
                    className={`
                      h-[1px]
                      transition-all
                      duration-300
                      ease-out
                      ${
                        activeSection === "about"
                          ? "w-16 bg-slate-200"
                          : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-400"
                      }
                    `}
                  />
                  About
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className={`
                    group
                    flex
                    items-center
                    gap-4
                    text-[12px]
                    font-medium
                    tracking-[0.18em]
                    uppercase
                    transition-all
                    duration-300
                    ${
                      activeSection === "experience"
                        ? "text-slate-200"
                        : "text-slate-500 hover:text-slate-300"
                    }
                  `}
                >
                  <span
                    className={`
                      h-[1px]
                      transition-all
                      duration-300
                      ease-out
                      ${
                        activeSection === "experience"
                          ? "w-16 bg-slate-200"
                          : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-400"
                      }
                    `}
                  />
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className={`
                    group
                    flex
                    items-center
                    gap-4
                    text-[12px]
                    font-medium
                    tracking-[0.18em]
                    uppercase
                    transition-all
                    duration-300
                    ${
                      activeSection === "projects"
                        ? "text-slate-200"
                        : "text-slate-500 hover:text-slate-300"
                    }
                  `}
                >
                  <span
                    className={`
                      h-[1px]
                      transition-all
                      duration-300
                      ease-out
                      ${
                        activeSection === "projects"
                          ? "w-16 bg-slate-200"
                          : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-400"
                      }
                    `}
                  />
                  Projects
                </a>
              </li>

            </ul>

          </nav>

   <div className="mt-auto pt-20 flex items-center gap-5">

  <a
    href="https://github.com/TU-USUARIO"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="
      text-slate-500
      hover:text-teal-300
      transition-all
      duration-200
      hover:-translate-y-[2px]
    "
  >
    <FaGithub className="text-[26px]" />
  </a>

  <a
    href="https://linkedin.com/in/TU-USUARIO"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="
      text-slate-500
      hover:text-teal-300
      transition-all
      duration-200
      hover:-translate-y-[2px]
    "
  >
<FaLinkedin className="text-[26px]" />
  </a>

  <a
    href="https://instagram.com/TU-USUARIO"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
    className="
      text-slate-500
      hover:text-teal-300
      transition-all
      duration-200
      hover:-translate-y-[2px]
    "
  >
    <FaInstagram className="text-[26px]" />
  </a>

  <a
    href="mailto:correo@ejemplo.com"
    aria-label="Email"
    className="
      text-slate-500
      hover:text-teal-300
      transition-all
      duration-200
      hover:-translate-y-[2px]
    "
  >
    <HiOutlineMail className="text-[26px]" />
  </a>

</div>

      </div>

    </aside>
  )
}

export default Sidebar