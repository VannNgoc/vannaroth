import Link from 'next/link'
export default function Hero(){
    return(
        <section className={`px-4 my-16 md:my-32 w-full`}>
            <div className="flex flex-col items-start md:items-center">
                <h2 className='text-green-800 text-base text-left md:text-center'>Web Developer</h2>
                <h1 className='text-left md:text-center'>Vannaroth Ngoc</h1>

                <div className={'max-w-3xl py-4'}>
                    <p>Trying to make the web a more friendly and welcoming place.</p>
                </div>

                <div className="flex flex-row items-center gap-6 py-4">
                    <Link className='btn-primary' href='https://vann-recollections.vercel.app/'>View Blog</Link>
                    <Link className='btn-secondary' href='about-me'>More About Me</Link>
                </div>

                <div className="mt-11 flex flex-wrap gap-7">
                    <a className="icon-link" href="https://github.com/VannNgoc">
                        <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
                        </svg>
                        github.com/VannNgoc
                    </a>

                    <a className="icon-link" href="mailto:vannaroth.ngoc@outlook.com">
                        <svg
                            className="h-4 w-4 shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.8}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <path d="m3 7 9 6 9-6" />
                        </svg>
                        vannaroth.ngoc@outlook.com
                    </a>
                </div>
            </div>
        </section>
    )
}