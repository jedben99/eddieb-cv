import type { Experience } from '@/types'

export function calculateYearsOfExperience(experience: Experience[]): number {
  if (!experience || experience.length === 0) return 0
  
  // Extract years from start dates (format: "Month YYYY" or "YYYY")
  const startYears = experience
    .map(exp => {
      const start = exp.start
      // Try to extract year from formats like "January 2007", "October 2016", or just "2007"
      const yearMatch = start.match(/\b(19|20)\d{2}\b/)
      return yearMatch ? parseInt(yearMatch[0]) : null
    })
    .filter((year): year is number => year !== null)
  
  if (startYears.length === 0) return 0
  
  const earliestYear = Math.min(...startYears)
  const currentYear = new Date().getFullYear()
  return currentYear - earliestYear
}
