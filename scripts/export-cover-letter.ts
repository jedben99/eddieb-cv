import { writeFile, mkdir, readFile } from 'fs/promises'
import { existsSync } from 'fs'
import { join } from 'path'
import { contact } from '../src/data'

async function generateCoverLetterPDF(filename?: string) {
  const mdDir = join(process.cwd(), 'generated', 'md')
  const pdfDir = join(process.cwd(), 'generated', 'cover-letters')
  
  // Create directories if they don't exist
  if (!existsSync(mdDir)) {
    await mkdir(mdDir, { recursive: true })
  }
  if (!existsSync(pdfDir)) {
    await mkdir(pdfDir, { recursive: true })
  }
  
  // Determine which file to use
  const baseFilename = filename || `${contact.name.toLowerCase().replace(/\s+/g, '-')}-cover-letter.md`
  const coverLetterPath = join(mdDir, baseFilename)
  
  if (!existsSync(coverLetterPath)) {
    console.error(`✗ Cover letter not found at ${coverLetterPath}`)
    console.log('  Please ensure the cover letter markdown file exists.')
    process.exit(1)
  }
  
  const markdown = await readFile(coverLetterPath, 'utf-8')
  
  try {
    const { mdToPdf } = await import('md-to-pdf')
    
    const inputPath = join(mdDir, baseFilename)
    const outputPath = join(pdfDir, baseFilename.replace('.md', '.pdf'))
    
    try {
      console.log(`  Converting ${baseFilename} to PDF...`)
      const pdf = await mdToPdf(
        { path: inputPath },
        { 
          dest: outputPath,
          pdf_options: {
            format: 'A4',
            margin: { top: '20mm', right: '20mm', bottom: '20mm', left: '20mm' },
            printBackground: true,
          },
          launch_options: {
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
          },
        }
      )
      
      if (pdf) {
        console.log(`✓ Generated ${baseFilename.replace('.md', '.pdf')}`)
        console.log(`\n✅ Cover letter PDF generated in ${pdfDir}`)
      } else {
        console.log(`⚠ No PDF generated for ${baseFilename}`)
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
      console.error('\n⚠ Error generating PDF:', error.message)
      console.log('You can manually convert the markdown using: npx md-to-pdf "' + coverLetterPath + '"')
    }
  }
}

// Main execution - accepts optional filename as command line argument
const filename = process.argv[2] // e.g., "eddie-benedetti-cover-letter-custom.md"
generateCoverLetterPDF(filename)
  .catch((error) => {
    console.error('Error generating cover letter PDF:', error)
    process.exit(1)
  })

