import { skills } from "@/data"

export function Skills() {
  return (
    <div className="border-t border-neutral-200 pt-6 dark:border-neutral-800">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
