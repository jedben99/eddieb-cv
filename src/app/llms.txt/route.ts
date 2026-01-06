import { NextResponse } from 'next/server'
import { contact, skills, allSkills, experience, education, languages, aiSection } from '@/data'

export async function GET() {
  const content = `# About ${contact.name}

## Professional Summary

${contact.title} with extensive experience building scalable web applications. Specializing in modern frontend and backend technologies, AI-powered development, and full-stack engineering.

## Contact Information
- Name: ${contact.name}
- Title: ${contact.title}
- Location: ${contact.location}
- Email: ${contact.email}
- Phone: ${contact.phone}

## Professional Experience

${experience.map(exp => `
### ${exp.role} at ${exp.company} (${exp.start} - ${exp.end})

**Key Achievement:** ${exp.keyAchievement}

**Responsibilities & Achievements:**
${exp.highlights.map(h => `- ${h}`).join('\n')}

**Technologies:** ${exp.stack.join(', ')}
`).join('\n')}

## Skills & Technologies

${skills.map(skill => `- ${skill}`).join(', ')}

**All Skills:** ${allSkills.join(', ')}

## AI-Powered Development

${aiSection.description}

**AI Tools Used:**
${aiSection.tools.map(tool => `- **${tool.name}:** ${tool.description}`).join('\n')}

## Languages

${languages.map(lang => `- ${lang.name}: ${lang.proficiency}`).join('\n')}

## Education

${education.map(edu => `
- **${edu.institution}** - ${edu.degree} (${edu.start} - ${edu.end})
${edu.note ? `  - ${edu.note}` : ''}
`).join('\n')}
`

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
