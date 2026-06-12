function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  demo,
}) {
  return (
    <article
      className="
        group
        relative
        cursor-pointer
        left-[-16px]
        mb-6
        grid
        sm:grid-cols-[140px_minmax(0,1fr)]
        gap-4
        rounded-md
        px-4
        py-5
        transition-colors
        duration-150
      "
    >
      <div
        className="
          absolute
          -left-3
          -right-10
          -inset-y-2
          z-0
          hidden
          rounded-md
          transition-all
          duration-150
          lg:block
    group-hover:bg-slate-800/20
          group-hover:shadow-lg
          group-hover:shadow-slate-900/50
        "
      />

      <div className="z-10 pt-1">
        <img
          src={image}
          alt={title}
          className="
            w-[138px]
            aspect-[16/10]
            rounded
            border
            border-slate-700/50
            object-cover
            transition-colors
            duration-150
            group-hover:border-slate-600
          "
        />
      </div>

      <div
        className="
          z-10
          min-w-0
        "
      >
        <h3
          className="
            text-[17px] 
            font-medium
            text-slate-200
            transition-colors
            duration-150
            group-hover:text-teal-300
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-sm
            leading-relaxed
            text-slate-400
            break-words
          w-[calc(100%+30px)]
          "
        >
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="
                rounded-full
                bg-teal-400/10
                px-3
                py-1
                text-[11px]
                font-medium
                text-teal-300
                
              "
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex gap-5">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="
              text-sm
              text-slate-400
              transition
              hover:text-teal-300
            "
          >
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="
              text-sm
              text-slate-400
              transition
              hover:text-teal-300
            "
          >
            Live Demo
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard