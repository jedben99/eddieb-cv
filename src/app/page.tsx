import type { Metadata } from "next"
import { contact, allSkills, experience, languages, aiSection } from "@/data"
import { calculateYearsOfExperience } from "@/utils/experience"
import { BASE_URL } from "@/data/constants"
import { Header, Contact, Skills, AIReady, Languages, Experience, Education } from "@/components/resume"

const yearsOfExperience = calculateYearsOfExperience(experience)

export async function generateMetadata(): Promise<Metadata> {
  const title = `${contact.name} | ${contact.title}`
  const description = `${yearsOfExperience}+ years of experience building scalable web applications. ${contact.title} specializing in React, Next.js, Angular, .NET, and AI-powered development. Based in ${contact.location}.`
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: BASE_URL,
      siteName: contact.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  }
}

export default function Home() {
  const languagesText = languages.map(lang => `${lang.name} (${lang.proficiency})`).join(', ')
  const aiToolsList = aiSection.tools.map(tool => tool.name).join(', ')
  
  return (
    <>
      {/* Hidden ATS-optimized text */}
      <div className="sr-only">
        <h1>{contact.name}</h1>
        <p>{contact.title} | AI-Powered Developer</p>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>Location: {contact.location}</p>
        <p>Skills: {allSkills.join(', ')}, AI Tools, {aiToolsList}, AI READY</p>
        <p>AI Tools: {aiToolsList}. Leverages AI-powered development tools to accelerate coding, improve code quality, and enhance productivity.</p>
        <p>Languages: {languagesText}</p>
      </div>
      
      <div className="min-h-screen bg-neutral-50 font-sans dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Mobile Layout: Header, Contact, Experience, Education, AI Ready, Skills, Languages */}
          <div className="flex flex-col lg:hidden gap-12">
            <Header />
            <Contact />
            <Experience />
            <Education />
            <AIReady />
            <Skills />
            <Languages />
          </div>

          {/* Desktop Layout: Sidebar + Main content */}
          <div className="hidden lg:grid gap-12 lg:grid-cols-3">
            {/* Left Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <Header />
                <Contact />
                <Skills />
                <AIReady />
                <Languages />
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-2 space-y-16">
              <Experience />
              <Education />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
