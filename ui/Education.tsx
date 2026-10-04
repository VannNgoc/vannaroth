export function Education() {
    const education = [
        {
            id: 1,
            school: 'The Ohio State University',
            degree: 'B.S. in Computer Science and Engineering',
            minor: 'Studio Art',
            graduated: '2020',
        },
    ]
    return (
        <section className="mx-auto w-full max-w-5xl px-4 pb-16 md:pb-20" id="education">
            <h2 className="inline-block border-l-4 border-green-500 pl-3 text-xl font-semibold">
                Education
            </h2>

            <ul className="mt-8 space-y-6">
                {education.map((entry) => (
                    <li className="flex flex-col gap-1 md:flex-row md:gap-8" key={entry.id}>
                        <p className="shrink-0 text-sm text-zinc-600 md:w-52">Class of {entry.graduated}</p>
                        <div className="max-w-[65ch] flex-1">
                            <h3 className="font-semibold">{entry.degree}</h3>
                            <p className="text-zinc-700">
                                at <span className="font-medium text-green-700">{entry.school}</span>
                            </p>
                            <p className="mt-1 text-sm text-zinc-600">Minor in {entry.minor}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
