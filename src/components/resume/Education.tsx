import { education } from "@/data"

export function Education() {
  return (
    <section>
      <h2 className="mb-8 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
        Education
      </h2>
      <div>
        {education.map((edu) => (
          <div key={edu.institution} className="mb-2 flex items-baseline justify-between">
            <div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                {edu.institution}
              </h3>
              <p className="mt-1 text-base font-semibold text-neutral-900 dark:text-neutral-100">
                {edu.degree}
              </p>
              {edu.note && (
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">
                  {edu.note}
                </p>
              )}
            </div>
            <span className="text-xs text-neutral-500 dark:text-neutral-500">
              {edu.start} — {edu.end}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
