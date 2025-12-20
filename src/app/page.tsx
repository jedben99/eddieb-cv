export default function Home() {
  return (
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
                  Software Developer
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
                  {['JavaScript', 'React', 'AngularJS', '.NET', 'C#', 'Node.js', 'SQL Server', 'Git', 'Agile'].map((skill) => (
                    <span key={skill} className="rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                      {skill}
                    </span>
                  ))}
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
                        Software Developer
                      </p>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      2016 — Present
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    Initially I worked in the company's main project to develop an application that streamlines and automates the main processes needed by Surety companies which include the managing of accounts, bonds, claims and billing.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    In 2018, I was selected to join a team to develop a new application for a specific branch of Surety companies called Home Warranty which is currently my main project. The main technologies I use in both of these projects are AngularJS, React, JavaScript, C#, SQL, HTML, Sass, NPM, and Git. My daily duties include completing work on a given sprint which is mainly implementing new features and fixing bugs.
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                        OneTouch Direct LLC
                      </h3>
                      <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                        Team Lead / Senior Developer
                      </p>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      2015 — 2016
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    From July of 2016 I became the team lead of a small team of three developers. Before that, I had earned the trust of my team lead and was given a leadership role which allowed me to delegate and coordinate some of the work. In addition to managing, training and providing reports to my CTO, my responsibilities mostly consisted of developing new features for existing applications.
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                        OneTouch Direct LLC
                      </h3>
                      <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                        Software Developer
                      </p>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      2011 — 2015
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    My main responsibility was the design and maintenance of web-based scripts used by the call center agents. The main technologies used for these scripts include HTML, CSS, JavaScript, jQuery and .NET C# (for creating web services). I also spent a considerable amount of time working with SQL investigating data related issues and creating stored procedures. Some other tasks included debugging existing .NET applications and training entry level developers.
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                        OneTouch Direct LLC
                      </h3>
                      <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                        Junior Developer
                      </p>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      2007 — 2010
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    This was my first job as a developer, I worked mainly with Visual Basic designing and maintaining scripts for the call center agents. These scripts mainly displayed specific verbiage, provided data capture capabilities and a basic order system for the sale of products according to the business rules of each campaign. I also designed a few programs and applications in FoxPro which was the database management system where all the data for the scripts was stored.
                  </p>
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
                    <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
                      BA in Information Technology
                    </p>
                  </div>
                  <span className="text-xs text-neutral-500 dark:text-neutral-500">
                    2001 — 2007
                  </span>
                </div>
                <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
                  BA awarded 3 credits needed for a minor in Mathematics
                </p>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="mb-8 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                Projects
              </h2>
              <div className="space-y-10">
                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                      Bond-Pro Enterprise Home Warranty
                    </h3>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      2017 — Present
                    </span>
                  </div>
                  <div className="mt-2 mb-3 flex flex-wrap gap-2">
                    {['AngularJS', 'C#', 'Bootstrap', 'Angular Material', 'Git'].map((tech) => (
                      <span key={tech} className="rounded border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    I was selected to be part of a new team in Bond-Pro to design this application which helps streamline and automate all the processes needed by Surety companies for their Home Warranty divisions.
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                      Bond-Pro Enterprise NextGen
                    </h3>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      2016 — 2017
                    </span>
                  </div>
                  <div className="mt-2 mb-3 flex flex-wrap gap-2">
                    {['AngularJS', 'C#', 'Bootstrap', 'Angular Material', 'Git'].map((tech) => (
                      <span key={tech} className="rounded border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    Main project in Bond-Pro designed to streamline and automate all the processes needed by Surety companies which include managing accounts, bonds, claims and billing.
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                      Employee Notes
                    </h3>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      2015
                    </span>
                  </div>
                  <div className="mt-2 mb-3 flex flex-wrap gap-2">
                    {['React', 'ASP.NET MVC', 'C#', 'Node.js', 'Socket.IO'].map((tech) => (
                      <span key={tech} className="rounded border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    I built this application in collaboration with my team lead. It basically replicates the functionality of Windows sticky notes with the added functionality of preventing sensitive data (credit cards, SSN, etc.) from being entered. The application was built using React for the front end and .NET for the back end. Node.js and Socket.IO were used to power the real-time saving and note collaboration features so the user would never have to reload the page.
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                      Customer Lead Loader
                    </h3>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      2016
                    </span>
                  </div>
                  <div className="mt-2 mb-3 flex flex-wrap gap-2">
                    {['ASP.NET', 'C#'].map((tech) => (
                      <span key={tech} className="rounded border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    This is a console application which takes optional and required parameters for uploading files into SQL and inserts them into a table if it exists or creates a new table otherwise.
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                      Phone Number Manager
                    </h3>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      2015
                    </span>
                  </div>
                  <div className="mt-2 mb-3 flex flex-wrap gap-2">
                    {['ASP.NET', 'C#'].map((tech) => (
                      <span key={tech} className="rounded border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    This application was built for a specific client whose customers might have more than one contact phone number. The user has the option to select the campaign and select the field that has the phone number they want to dial.
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <h3 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                      Exhaust Leads
                    </h3>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      2014
                    </span>
                  </div>
                  <div className="mt-2 mb-3 flex flex-wrap gap-2">
                    {['ASP.NET', 'C#'].map((tech) => (
                      <span key={tech} className="rounded border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    Small application that allows supervisors to select a file from a dropdown and exhaust or retire the leads belonging to that file.
                  </p>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
