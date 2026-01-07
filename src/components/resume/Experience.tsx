import { experience } from "@/data"

export function Experience() {
  return (
    <section>
      <h2 className="mb-8 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
        Experience
      </h2>
      <div className="space-y-12">
        {experience.map((exp) => (
          <div key={`${exp.company}-${exp.start}`}>
            <div className="mb-2 flex items-baseline justify-between">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                  {exp.company}
                </h3>
                {exp.roles ? (
                  <div className="mt-0.5 space-y-1">
                    {exp.roles.map((role, idx) => (
                      <div key={idx}>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          {role.role}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-500">
                          {role.start} — {role.end}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                    {exp.role}
                  </p>
                )}
              </div>
              <span className="text-xs text-neutral-500 dark:text-neutral-500">
                {exp.start} — {exp.end}
              </span>
            </div>
            <div className="mt-3 mb-4 flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>
            <div className="my-4 rounded-lg border-l-4 border-neutral-400 bg-neutral-100/50 p-3 dark:border-neutral-500 dark:bg-neutral-800/50">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">Key Achievement</p>
              <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {exp.keyAchievement}
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
