import { aiSection } from "@/data"

export function AIReady() {
  return (
    <div className="border-t border-neutral-200 pt-6 dark:border-neutral-800">
      <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
        AI READY
      </h2>
      <p className="mb-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
        {aiSection.description}
      </p>
      <div className="space-y-2">
        {aiSection.tools.map((tool) => (
          <div key={tool.name} className="flex items-start gap-2">
            <span className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-500">•</span>
            <div className="flex-1">
              <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{tool.name}</p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
