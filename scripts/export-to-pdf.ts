import { writeFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import { join } from 'path'
import { contact, skills, allSkills, experience, education, languages, aiSection } from '../src/data'

function formatExperience(exp: typeof experience[0]): string {
  let markdown = `### ${exp.role} at ${exp.company}\n\n`
  markdown += `**${exp.start} - ${exp.end}**\n\n`
  
  if (exp.keyAchievement) {
    markdown += `⭐ **Key Achievement:** ${exp.keyAchievement}\n\n`
  }
  
  markdown += '**Highlights:**\n'
  exp.highlights.forEach(highlight => {
    markdown += `- ${highlight}\n`
  })
  
  if (exp.stack && exp.stack.length > 0) {
    markdown += `\n**Technologies:** ${exp.stack.join(', ')}\n`
  }
  
  return markdown
}

function formatResumeToMarkdown(): string {
  let markdown = `# ${contact.name}\n\n`
  markdown += `${contact.title}\n\n`
  markdown += `**Location:** ${contact.location}  \n`
  markdown += `**Email:** ${contact.email}  \n`
  markdown += `**Phone:** ${contact.phone}  \n\n`
  
  markdown += `**Online Resume:** This resume is also available online where it is regularly updated with the latest information and additional details about my work.\n\n`
  
  markdown += `---\n\n`
  markdown += `## Summary\n\n`
  markdown += `${contact.title} with extensive experience building scalable web applications. Specializing in modern frontend and backend technologies, AI-powered development, and full-stack engineering.\n\n`
  
  markdown += `---\n\n`
  markdown += `## Experience\n\n`
  
  experience.forEach(exp => {
    markdown += formatExperience(exp)
    markdown += '\n'
  })
  
  markdown += `---\n\n`
  markdown += `## Skills & Capabilities\n\n`
  markdown += `${allSkills.join(', ')}\n\n`
  
  markdown += `---\n\n`
  markdown += `## AI-Powered Development\n\n`
  markdown += `${aiSection.description}\n\n`
  markdown += `**AI Tools Used:**\n`
  aiSection.tools.forEach(tool => {
    markdown += `- **${tool.name}:** ${tool.description}\n`
  })
  markdown += '\n'
  
  markdown += `---\n\n`
  markdown += `## Languages\n\n`
  languages.forEach(lang => {
    markdown += `- **${lang.name}:** ${lang.proficiency}\n`
  })
  markdown += '\n'
  
  markdown += `---\n\n`
  markdown += `## Education\n\n`
  
  education.forEach(edu => {
    markdown += `**${edu.institution}**  \n`
    markdown += `${edu.degree} (${edu.start} - ${edu.end})\n`
    if (edu.note) {
      markdown += `${edu.note}\n`
    }
    markdown += '\n'
  })
  
  return markdown
}

async function generateMarkdownFiles() {
  const mdDir = join(process.cwd(), 'generated', 'md')
  const pdfDir = join(process.cwd(), 'public', 'generated', 'pdf')
  
  // Create directories if they don't exist
  if (!existsSync(mdDir)) {
    await mkdir(mdDir, { recursive: true })
  }
  if (!existsSync(pdfDir)) {
    await mkdir(pdfDir, { recursive: true })
  }
  
  // Generate resume markdown
  const markdown = formatResumeToMarkdown()
  const filename = `${contact.name.toLowerCase().replace(/\s+/g, '-')}-resume.md`
  await writeFile(join(mdDir, filename), markdown, 'utf-8')
  console.log(`✓ Generated ${filename}`)
  
  return { mdDir, pdfDir, filename }
}

async function generatePDFs(mdDir: string, pdfDir: string, filename: string) {
  try {
    const { mdToPdf } = await import('md-to-pdf')
    
    const inputPath = join(mdDir, filename)
    const outputPath = join(pdfDir, filename.replace('.md', '.pdf'))
    
    try {
      console.log(`  Converting ${filename} to PDF...`)
      const pdf = await mdToPdf(
        { path: inputPath },
        { 
          dest: outputPath,
          pdf_options: {
            format: 'A4',
            margin: { top: '20mm', right: '15mm', bottom: '20mm', left: '15mm' },
            printBackground: true,
          },
          launch_options: {
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
          },
        }
      )
      
      if (pdf) {
        console.log(`✓ Generated ${filename.replace('.md', '.pdf')}`)
      } else {
        console.log(`⚠ No PDF generated for ${filename}`)
      }
    } catch (pdfError: any) {
      console.error(`✗ Failed to generate PDF for ${filename}:`, pdfError.message)
      if (pdfError.message.includes('timeout')) {
        console.log('  This might be due to Puppeteer/Chrome issues.')
        console.log('  Try running: npx md-to-pdf "' + inputPath + '"')
      }
    }
  } catch (error: any) {
    if (error.code === 'MODULE_NOT_FOUND') {
      console.log('\n⚠ md-to-pdf not installed.')
      console.log('Run: npm install -D md-to-pdf')
      console.log('Then run this script again to generate PDFs.')
    } else {
      console.error('\n⚠ Error generating PDFs:', error.message)
      console.log('Markdown files are still available in generated/md/')
      console.log('You can manually convert them using: npx md-to-pdf generated/md/*.md')
    }
  }
}

// Main execution
generateMarkdownFiles()
  .then(async ({ mdDir, pdfDir, filename }) => {
    console.log(`\n✅ Markdown file generated in ${mdDir}`)
    await generatePDFs(mdDir, pdfDir, filename)
    console.log(`\n✅ PDF generated in ${pdfDir}`)
    console.log(`\n✅ All files generated successfully!`)
  })
  .catch((error) => {
    console.error('Error generating files:', error)
    process.exit(1)
  })
