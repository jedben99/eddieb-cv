'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

export function ChatGPTButton() {
  const [copied, setCopied] = useState(false)
  const pathname = usePathname()

  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  const baseUrl = currentUrl.split(pathname)[0]
  const llmsTxtUrl = `${baseUrl}/llms.txt`

  const copyPageAsMarkdown = async () => {
    try {
      const response = await fetch(llmsTxtUrl)
      const text = await response.text()
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to fetch llms.txt:', err)
    }
  }

  const openInChatGPT = () => {
    window.open(`https://chat.openai.com/?q=${encodeURIComponent(`Tell me about this page: ${currentUrl}`)}`, '_blank')
  }

  return (
    <>
      <button
        onClick={copyPageAsMarkdown}
        className="flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
        aria-label="Copy page content for LLM"
      >
        {copied ? (
          <>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600 dark:text-green-400"
            >
              <path
                d="M13.3333 4L6 11.3333L2.66667 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-green-600 dark:text-green-400">Copied</span>
          </>
        ) : (
          <>
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-600 dark:text-neutral-400"
            >
              <path
                d="M5.33333 2.66667H11.3333C12.0697 2.66667 12.6667 3.26362 12.6667 4V12C12.6667 12.7364 12.0697 13.3333 11.3333 13.3333H5.33333C4.59695 13.3333 4 12.7364 4 12V4C4 3.26362 4.59695 2.66667 5.33333 2.66667Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6667 1.33333H8.66667C8.29848 1.33333 8 1.63181 8 2V2.66667C8 3.03486 8.29848 3.33333 8.66667 3.33333H10.6667C11.0349 3.33333 11.3333 3.03486 11.3333 2.66667V2C11.3333 1.63181 11.0349 1.33333 10.6667 1.33333Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Copy for LLM</span>
          </>
        )}
      </button>
      <button
        onClick={openInChatGPT}
        className="flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
        aria-label="Open in ChatGPT"
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
            d="M6 3H3C2.44772 3 2 3.44772 2 4V13C2 13.5523 2.44772 14 3 14H12C12.5523 14 13 13.5523 13 13V10M10 2H14M14 2V6M14 2L6 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Open in ChatGPT</span>
      </button>
    </>
  )
}
