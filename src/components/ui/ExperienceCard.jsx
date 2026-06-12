import { ArrowUpRight } from "lucide-react"

function ExperienceCard({
  year,
  role,
  company,
  description,
  technologies,
}) {
  return (
   <article
  className="
    group
    relative
    cursor-pointer
    left-[-16px]
    mb-8
    grid
    sm:grid-cols-7
    gap-4
    rounded-md
    px-4
    py-6
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
    transition-colors
    duration-150
    lg:block
    group-hover:bg-slate-800/20
  "
/>

<div className="z-10  pt-[7px] sm:col-span-1">
  <p
  className="
  text-[12px]
  font-medium
  uppercase
  tracking-wider
  whitespace-nowrap
  text-slate-500
  transition-colors
  duration-150
  group-hover:text-slate-400
"
>
  {year}
</p>

      </div>

<div className="z-10 sm:col-span-6 sm:pl-[72px] w-[calc(100%+30px)]">
            <h3
            className="
              flex
              items-center
              gap-1
              text-[17px]
              font-medium
              text-slate-200
              transition-colors
              duration-150
              group-hover:text-teal-300
            "
          >
            {role}

          <ArrowUpRight
          size={16}
          strokeWidth={1.75}
          className="
            translate-y-[5px]
            transition-transform
            duration-150
            ease-out
            group-hover:-translate-y-[3px]
            group-hover:translate-x-[4px]
          "
        />
          </h3>

        <p className="mt-1 text-sm text-slate-500">
          {company}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-slate-400 ">
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
                text-xs
                font-medium
                text-teal-300
              "
            >
              {tech}
            </li>

          ))}

        </ul>

      </div>

    </article>
  )
}

export default ExperienceCard