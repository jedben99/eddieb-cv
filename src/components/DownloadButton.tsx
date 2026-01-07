'use client'

import { contact } from '@/data'

export function DownloadButton() {
  const downloadPDF = () => {
    const filename = `${contact.name.toLowerCase().replace(/\s+/g, '-')}-resume.pdf`
    const link = document.createElement('a')
    link.href = `/generated/pdf/${filename}`
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button
      onClick={downloadPDF}
      className="flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
      aria-label="Download Resume PDF"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-neutral-600 dark:text-neutral-400"
      >
        <path
          d="M8 2V10M8 10L5 7M8 10L11 7M2 12H14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Download PDF</span>
    </button>
  )
}
