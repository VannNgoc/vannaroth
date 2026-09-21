
export function Experience() {
    const experiences = [
        {
            id: 1,
            company: 'Career Break',
            role: 'Wandering, Serving, Building',
            location: 'All over',
            duration: 'May 2025 - Present',
            description: 'Planned career break for travel and volunteer work (community service, homeless shelter support) while independently designing, building, and shipping recollections on a modern Next.js stack.',
            tags: ['React.js','Next.js', 'Typescript', 'Jest', 'Tailwind CSS', 'Postgres'],
            isBreak: true,
        },
        {
            id: 2,
            company: 'R.G. Barry Brands',
            role: 'Frontend Developer',
            location: 'Pickerington, Ohio',
            duration: 'May 2021 - May 2025',
            bullets: [
                'Built and maintained e-commerce experiences on Salesforce Commerce Cloud (SFRA) using vanilla JavaScript, HTML5, and CSS/Sass.',
                'Collaborated with designers and backend developers to ship features and troubleshoot production issues.',
                'Kept the storefront fast, accessible, and maintainable.',
            ],
            tags: ['Salesforce Commerce Cloud', 'JavaScript', 'ISML', 'Sass', 'BootStrap'],
        },
        {
            id: 3,
            company: 'Sentinel Healthcare',
            role: 'Software Engineer Intern',
            location: 'Seattle, Washington',
            duration: 'July 2019 - January 2020',
            description: 'Software engineer intern on an Angular.js health dashboard for hypertension patients, building features for blood pressure tracking and virtual provider communication.',
            tags: ['Angular.js','Docker', 'Bootstrap'],
        },
        {
            id: 4,
            company: 'Tech Corps',
            role: 'Instructor',
            location: 'Columbus, Ohio',
            duration: 'Summer 2018 & Summer 2019',
            bullets: [
                'Taught programming and IT concepts to K-12 students, adjusting lessons to fit different ages and skill levels.',
                'Built a curriculum to prepare students for the CompTIA IT Fundamentals (ITF+) exam.',
                'Organized project showcases where students presented their work to peers, parents, and donors.',
            ],
            tags: ['C#', 'HTML5', "JavaScript", 'CSS', 'Scratch 👀'],
        },
    ]
    return (
        <section className="mx-auto w-full max-w-5xl px-4 pb-16 md:pb-20" id="experience">
            <h2 className="inline-block border-l-4 border-green-500 pl-3 text-xl font-semibold">
                Work Experience
            </h2>

            <ol className="relative mt-8 border-l border-zinc-200">
                {experiences.map((experience) => (
                    <li className="relative py-6 pl-6 first:pt-0 last:pb-0" key={experience.id}>
                        <span className="absolute top-[1.6rem] -left-1.25 h-2.5 w-2.5 rounded-full bg-green-500" />
                        <div className="flex flex-col gap-1 md:flex-row md:gap-8">
                            <div className="shrink-0 md:w-52">
                                <p className="text-sm text-zinc-600">{experience.duration}</p>
                                <h3 className="font-semibold">{experience.role}</h3>
                                <p className="text-sm text-zinc-600">{experience.location}</p>
                            </div>
                            <div
                                className={`max-w-[65ch] flex-1 ${
                                    experience.isBreak ? 'rounded-lg bg-green-50 p-4' : ''
                                }`}
                            >
                                <h4 className="font-semibold">{experience.company}</h4>
                                {experience.description && (
                                    <p className="mt-1 text-zinc-700">{experience.description}</p>
                                )}
                                {experience.bullets && (
                                    <ul className="mt-1 list-disc space-y-1 pl-5 text-zinc-700 marker:text-green-600">
                                        {experience.bullets.map((bullet, i) => (
                                            <li key={i}>{bullet}</li>
                                        ))}
                                    </ul>
                                )}
                                {experience.tags && (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {experience.tags.map((tag) => (
                                            <span
                                                className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600"
                                                key={tag}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
