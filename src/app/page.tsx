import type { Metadata } from "next"
import { contact, skills, allSkills, experience, education, languages, aiSection } from "@/data"
import { calculateYearsOfExperience } from "@/utils/experience"
import { BASE_URL } from "@/data/constants"

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
          {/* Two Column Layout */}
          <div className="grid gap-12 lg:grid-cols-3">
            
            {/* Left Sidebar - Compact Info */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Name & Title */}
                <div>
                  <h1 className="text-4xl font-light tracking-tight text-neutral-900 dark:text-neutral-50">
                    {contact.name.split(' ').map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </h1>
                  <p className="mt-3 text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                    {contact.title}
                  </p>
                </div>

                {/* Contact */}
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

                {/* Skills */}
                <div className="border-t border-neutral-200 pt-6 dark:border-neutral-800">
                  <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                    Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI READY */}
                <div className="border-t border-neutral-200 pt-6 dark:border-neutral-800">
                  <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                    AI READY
                  </h2>
                  <p className="mb-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {aiSection.description}
                  </p>
                  <div className="space-y-2">
                    {aiSection.tools.map((tool) => (
                      <div key={tool.name} className="flex items-start gap-2">
                        <span className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-500">•</span>
                        <div className="flex-1">
                          <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{tool.name}</p>
                          <p className="text-xs text-neutral-600 dark:text-neutral-400">{tool.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              {/* Languages */}
              <div className="border-t border-neutral-200 pt-6 dark:border-neutral-800">
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                  Languages
                </h2>
                <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  {languages.map((lang) => (
                    <div key={lang.name}>{lang.name} — {lang.proficiency}</div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-2 space-y-16">
            
            {/* Experience */}
            <section>
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                Experience
              </h2>
              <div className="space-y-12">
                {experience.map((exp) => (
                  <div key={`${exp.company}-${exp.start}`}>
                    <div className="mb-2 flex items-baseline justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                          {exp.company}
                        </h3>
                        {exp.roles ? (
                          <div className="mt-0.5 space-y-1">
                            {exp.roles.map((role, idx) => (
                              <div key={idx}>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                  {role.role}
                                </p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-500">
                                  {role.start} — {role.end}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                            {exp.role}
                          </p>
                        )}
                      </div>
                      <span className="text-xs text-neutral-500 dark:text-neutral-500">
                        {exp.start} — {exp.end}
                      </span>
                    </div>
                    <div className="mt-3 mb-4 flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="my-4 rounded-lg border-l-4 border-neutral-400 bg-neutral-100/50 p-3 dark:border-neutral-500 dark:bg-neutral-800/50">
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">Key Achievement</p>
                      <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        {exp.keyAchievement}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                Education
              </h2>
              <div>
                {education.map((edu) => (
                  <div key={edu.institution} className="mb-2 flex items-baseline justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                        {edu.institution}
                      </h3>
                      <p className="mt-1 text-base font-semibold text-neutral-900 dark:text-neutral-100">
                        {edu.degree}
                      </p>
                      {edu.note && (
                        <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">
                          {edu.note}
                        </p>
                      )}
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      {edu.start} — {edu.end}
                    </span>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
    </>
  );
}
