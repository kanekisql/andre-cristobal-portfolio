import experiences from "../../data/experience"
import ExperienceCard from "../ui/ExperienceCard"


function ExperienceSection() {
  return (
 <section id="experience" className="mb-[180px] scroll-mt-24">

      <h2 className="text-3xl font-bold mb-10">
        
      </h2>

      <div>

        {experiences.map((experience, index) => (

          <ExperienceCard
            key={index}
            year={experience.year}
            role={experience.role}
            company={experience.company}
            description={experience.description}
            technologies={experience.technologies}
          />

        ))}

      </div>

    </section>
  )
}

export default ExperienceSection