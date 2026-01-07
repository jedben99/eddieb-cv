import { contact } from "@/data"
import { DownloadButton } from "@/components/DownloadButton"
import { LLMDropdown } from "@/components/LLMDropdown"

export function Header() {
  return (
    <div>
      <h1 className="text-4xl font-light tracking-tight text-neutral-900 dark:text-neutral-50">
        {contact.name.split(' ').map((part, i, arr) => (
          <span key={i}>
            {part}
            {i < arr.length - 1 && <br />}
          </span>
        ))}
      </h1>
      <p className="mt-3 text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
        {contact.title}
      </p>
      <div className="mt-4 flex items-center gap-2">
        <DownloadButton />
        <LLMDropdown />
      </div>
    </div>
  )
}
