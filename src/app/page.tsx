export default function Home() {
  const allSkills = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Next.js', 'Redux', 'AngularJS', 'Angular', '.NET', 'C#', 'Git', 'Agile', 'jQuery', 'Node.js', 'Express', 'SQL Server', 'MongoDB', 'Sass', 'ASP.NET', 'Visual Basic', 'FoxPro', 'Bootstrap', 'Angular Material', 'Socket.IO', 'NPM', 'SQL', 'Entity Framework', 'Styled Components', 'AWS', 'S3', 'Figma'];
  
  return (
    <>
      {/* Hidden ATS-optimized text */}
      <div className="sr-only">
        <h1>Jesus Benedetti</h1>
        <p>Software Engineer | AI-Powered Developer</p>
        <p>Email: jedben99@gmail.com</p>
        <p>Phone: 813-300-2538</p>
        <p>Location: Tampa, Florida</p>
        <p>Skills: {allSkills.join(', ')}, AI Tools, Cursor, Claude Code, Codex, AI READY</p>
        <p>AI Tools: Cursor, Claude Code, Codex. Leverages AI-powered development tools to accelerate coding, improve code quality, and enhance productivity.</p>
        <p>Languages: English (Fluent), Spanish (Fluent)</p>
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
                    Jesus<br />Benedetti
                  </h1>
                  <p className="mt-3 text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                    Software Engineer
                  </p>
                </div>

                {/* Contact */}
                <div className="space-y-3 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                  <a href="mailto:jedben99@gmail.com" className="block text-sm text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100">
                    jedben99@gmail.com
                  </a>
                  <a href="tel:8133002538" className="block text-sm text-neutral-700 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100">
                    813.300.2538
                  </a>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Tampa, FL
                  </p>
                </div>

                {/* Skills */}
                <div className="border-t border-neutral-200 pt-6 dark:border-neutral-800">
                  <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                    Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'TypeScript', 'React', 'Next.js', 'AngularJS', 'Angular', '.NET', 'C#', 'Node.js', 'Express', 'SQL Server', 'MongoDB', 'Git', 'Agile', 'HTML', 'CSS', 'Styled Components', 'jQuery', 'Sass', 'ASP.NET', 'AWS'].map((skill) => (
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
                    Software engineering is evolving. I use AI tools to supercharge my workflow, write cleaner code faster, and help me detect issues.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-500">•</span>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Cursor</p>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400">AI-powered IDE with built-in code generation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-500">•</span>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Claude Code & Codex</p>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400">Code review, debugging, and architecture</p>
                      </div>
                    </div>
                  </div>
                </div>

              {/* Languages */}
              <div className="border-t border-neutral-200 pt-6 dark:border-neutral-800">
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                  Languages
                </h2>
                <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <div>English — Fluent</div>
                  <div>Spanish — Fluent</div>
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
                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                        Bond-Pro
                      </h3>
                      <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                        Software Engineer
                      </p>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      October 2016 — December 2025
                    </span>
                  </div>
                  <div className="mt-3 mb-4 flex flex-wrap gap-2">
                    {['AngularJS', 'Angular', 'React', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'MongoDB', 'HTML', 'CSS', 'Sass', 'NPM', 'Git'].map((tech) => (
                      <span key={tech} className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="my-4 rounded-lg border-l-4 border-neutral-400 bg-neutral-100/50 p-3 dark:border-neutral-500 dark:bg-neutral-800/50">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">Key Achievement</p>
                    <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      Selected to lead frontend architecture for new Home Warranty application, built primarily with AngularJS while strategically introducing React components as part of migration efforts. This was a brand new application built from the ground up, designed to streamline and automate all processes needed by Surety companies for their Home Warranty divisions.
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Developed and maintained enterprise-level web applications for Surety companies, automating critical business processes including account management, bond processing, claims handling, and billing operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Built scalable solutions using modern frontend and backend technologies, significantly reducing manual processing time for users</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Selected in 2018 to join specialized team developing new application for Home Warranty divisions; led frontend architecture decisions and implemented responsive UI components using Angular Material and Bootstrap</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Collaborated in Agile/Scrum environment, consistently delivered sprint commitments and maintained code quality through peer reviews</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Optimized database queries and API endpoints, significantly improving application performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Mentored junior developers and contributed to technical documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Leveraged AI-powered development tools (Cursor, Claude Code) to accelerate coding, improve code quality, and enhance productivity in daily development workflow</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                        Thinkbean
                      </h3>
                      <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                        Software Engineer
                      </p>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      March 2022 — December 2022
                    </span>
                  </div>
                  <div className="mt-3 mb-4 flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Styled Components', 'Express', 'AWS', 'S3', 'Figma'].map((tech) => (
                      <span key={tech} className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="my-4 rounded-lg border-l-4 border-neutral-400 bg-neutral-100/50 p-3 dark:border-neutral-500 dark:bg-neutral-800/50">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">Key Achievement</p>
                    <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      Built Expert Session platform from scratch as part of an aggressive 5-person team, enabling video interviews between users and industry experts. Integrated AWS video services and S3 storage for seamless recording capabilities, delivering a production-ready product in 9 months.
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Developed Expert Session, a video conferencing platform connecting users with industry experts across various fields for one-on-one video interviews</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Built responsive frontend using React, Next.js, and Styled Components, translating Figma designs into pixel-perfect, interactive user interfaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Developed RESTful APIs using Express.js to handle user authentication, session management, and expert matching functionality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Integrated AWS video services for real-time video conferencing capabilities, ensuring low-latency and high-quality video sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Implemented AWS S3 integration for recording and storing video sessions, enabling users to access session recordings on-demand</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Collaborated closely with designers to implement Figma designs, ensuring consistent UI/UX across all platform features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Worked in a fast-paced, agile environment as part of a 5-person team, contributing to rapid product development and iterative improvements</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                        OneTouch Direct LLC
                      </h3>
                      <div className="mt-0.5 space-y-1">
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          Team Lead / Senior Developer
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-500">
                          June 2015 — October 2016
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          Software Engineer
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-500">
                          January 2011 — May 2015
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          Junior Developer
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-500">
                          January 2007 — December 2010
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      January 2007 — October 2016
                    </span>
                  </div>
                  <div className="mt-3 mb-4 flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'JavaScript', 'AngularJS', 'jQuery', '.NET', 'C#', 'SQL', 'ASP.NET', 'Visual Basic', 'FoxPro'].map((tech) => (
                      <span key={tech} className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="my-4 rounded-lg border-l-4 border-neutral-400 bg-neutral-100/50 p-3 dark:border-neutral-500 dark:bg-neutral-800/50">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">Key Achievement</p>
                    <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      Advanced from Junior Developer to Team Lead over my 9 year tenure, managing a team of 3 developers and significantly improving team velocity. Reduced data-related errors through database optimization and established best practices that are still used today.
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Promoted to Team Lead in July 2016, managing a team of three developers and overseeing multiple concurrent projects; led daily standups, sprint planning sessions, and code review processes, significantly improving team velocity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Mentored junior developers through pair programming and technical training sessions, resulting in faster onboarding and improved code quality; coordinated with cross-functional teams and delivered weekly status reports to CTO</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Architected and developed new features for high-traffic web applications serving call center operations, utilizing HTML, CSS, JavaScript, jQuery, ASP.NET, C#, and SQL Server</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Designed and maintained web-based applications and scripts used by call center agents, supporting multiple campaigns and business units; developed responsive user interfaces ensuring cross-browser compatibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Created RESTful web services using ASP.NET and C#; designed and optimized SQL Server databases, wrote complex stored procedures, and resolved data integrity issues, significantly reducing data-related errors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Debugged and refactored legacy .NET applications, improving maintainability and performance; trained and mentored entry-level developers on best practices and coding standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Developed and maintained Visual Basic applications and scripts; created dynamic, data-driven forms with comprehensive validation and automated order processing capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400 dark:text-neutral-600">•</span>
                      <span>Designed and maintained FoxPro database systems, ensuring data integrity; implemented campaign-specific workflows and product ordering systems, enabling agents to process orders more efficiently</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                Education
              </h2>
              <div>
                <div className="mb-2 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                      University of South Florida
                    </h3>
                    <p className="mt-1 text-base font-semibold text-neutral-900 dark:text-neutral-100">
                      Bachelor of Science in Information Technology
                    </p>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">
                      Completed coursework within 3 credits of a Mathematics minor
                    </p>
                  </div>
                  <span className="text-xs text-neutral-500 dark:text-neutral-500">
                    2001 — 2007
                  </span>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
    </>
  );
}
