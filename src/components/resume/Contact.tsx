import { contact } from "@/data"

export function Contact() {
  return (
    <div className="space-y-3 border-t border-neutral-200 pt-6 dark:border-neutral-800">
      <a href={`mailto:${contact.email}`} className="block text-sm text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100">
        {contact.email}
      </a>
      <a href={`tel:${contact.phone.replace(/\./g, '')}`} className="block text-sm text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100">
        {contact.phone}
      </a>
      <p className="text-sm text-neutral-700 dark:text-neutral-300">
        {contact.location}
      </p>
    </div>
  )
}
