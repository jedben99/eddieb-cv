import { languages } from "@/data"

export function Languages() {
  return (
    <div className="border-t border-neutral-200 pt-6 dark:border-neutral-800">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
        Languages
      </h2>
      <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
        {languages.map((lang) => (
          <div key={lang.name}>{lang.name} — {lang.proficiency}</div>
        ))}
      </div>
    </div>
  )
}
