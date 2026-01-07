'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export function LLMDropdown() {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  const baseUrl = currentUrl.split(pathname)[0]
  const llmsTxtUrl = `${baseUrl}/llms.txt`

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const copyPageAsMarkdown = async () => {
    try {
      const response = await fetch(llmsTxtUrl)
      const text = await response.text()
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000)
      setIsOpen(false)
    } catch (err) {
      console.error('Failed to fetch llms.txt:', err)
    }
  }

  const openInChatGPT = () => {
    window.open(`https://chat.openai.com/?q=${encodeURIComponent(`Tell me about this page: ${currentUrl}`)}`, '_blank')
    setIsOpen(false)
  }

  const openInClaude = () => {
    window.open(`https://claude.ai/new?q=${encodeURIComponent(`Tell me about this page: ${currentUrl}`)}`, '_blank')
    setIsOpen(false)
  }

  const mainButtonLabel = copied ? (
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
  )

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-stretch rounded-md border border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 overflow-hidden">
        <button
          onClick={copyPageAsMarkdown}
          className="px-3 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition flex items-center gap-2"
          aria-label="Copy page content for LLM"
        >
          {mainButtonLabel}
        </button>
        <div className="w-px bg-neutral-300 dark:bg-neutral-700" />
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsOpen(!isOpen)
          }}
          className="px-2 py-1.5 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition flex items-center"
          aria-label="More options"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 z-50 w-56 rounded-md border border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 shadow-lg overflow-hidden">
          <div className="p-1">
            <button
              onClick={openInChatGPT}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition text-left group"
            >
              <div className="w-5 h-5 relative shrink-0">
                <Image
                  src="/img/technologies/openai.svg"
                  alt="OpenAI"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition">
                  Open in ChatGPT
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
                  Ask questions about this page
                </div>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-400 dark:text-neutral-600 mt-0.5 shrink-0"
              >
                <path
                  d="M6 3H3C2.44772 3 2 3.44772 2 4V13C2 13.5523 2.44772 14 3 14H12C12.5523 14 13 13.5523 13 13V10M10 2H14M14 2V6M14 2L6 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={openInClaude}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition text-left group"
            >
              <div className="w-5 h-5 relative shrink-0">
                <Image
                  src="/img/technologies/claude.svg"
                  alt="Claude"
                  width={20}
                  height={20}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition">
                  Open in Claude
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-0.5">
                  Ask questions about this page
                </div>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-neutral-400 dark:text-neutral-600 mt-0.5 shrink-0"
              >
                <path
                  d="M6 3H3C2.44772 3 2 3.44772 2 4V13C2 13.5523 2.44772 14 3 14H12C12.5523 14 13 13.5523 13 13V10M10 2H14M14 2V6M14 2L6 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
