export interface ContactInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
}

export interface Experience {
  company: string
  role: string
  start: string
  end: string
  stack: string[]
  keyAchievement: string
  highlights: string[]
  roles?: Array<{
    role: string
    start: string
    end: string
  }>
}

export interface Education {
  institution: string
  degree: string
  note?: string
  start: string
  end: string
}

export interface Language {
  name: string
  proficiency: string
}

export interface AITool {
  name: string
  description: string
}

export interface AISection {
  description: string
  tools: AITool[]
}
