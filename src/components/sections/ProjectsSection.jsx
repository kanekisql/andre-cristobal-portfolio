import projects from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'

function ProjectsSection() {
  return (
    <section id="projects" className="mt-32">

      <h2 className="mb-6 text-sm font-bold tracking-widest text-slate-200 uppercase lg:hidden">

        Proyectos
      </h2>

      <div className="space-y-2">

        {projects.map((project) => (

          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
          />

        ))}

      </div>

    </section>
  )
}

export default ProjectsSection