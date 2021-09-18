const FeatureList = () => {
    return (
        <section className="px-4 py-8 mx-auto max-w-7xl mt-20">
            <div className="flex flex-col w-full text-left lg:text-center">
                <h2 className="text-3xl font-extrabold leading-tight capitalize mx-auto mb-4 tracking-tighter text-black lg:w-1/2 lg:text-3xl title-font">skills & preferences</h2>
                <p className="mx-auto text-base font-medium leading-relaxed text-black opacity-75 lg:w-1/2 mb-16">These are some of my main skills and preferences while performing a job.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-16 lg:gap-x-24 gap-y-10 sm:gap-y-20">
                <div style={{ width: "240px", height: "136px" }}>
                    <div className="flex items-center justify-center w-8 h-8 mb-4 text-yellow-600 bg-yellow-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <h3 className="capitalize mb-2 text-base font-semibold leading-tight text-black">creative</h3>
                    <p className="text-sm text-black opacity-75">My mind is 24/7 thinking about other alternatives, thus generating an innumerable amount of possible solutions to different problems.</p>
                </div>
                <div style={{ width: "240px", height: "136px" }}>
                    <div className="flex items-center justify-center w-8 h-8 mb-4 text-green-600 bg-green-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 className="capitalize mb-2 text-base font-semibold leading-tight text-black">teamwork</h3>
                    <p className="text-sm text-black opacity-75">I can lead and work smoothly in a team.</p>
                </div>
                <div style={{ width: "240px", height: "136px" }}>
                    <div className="flex items-center justify-center w-8 h-8 mb-4 text-blue-600 bg-blue-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                    </div>
                    <h3 className="capitalize mb-2 text-base font-semibold leading-tight text-black">communication</h3>
                    <p className="text-sm text-black opacity-75">I am a native Spanish speaker and can speak English fluently.</p>
                </div>
                <div style={{ width: "240px", height: "136px" }}>
                    <div className="flex items-center justify-center w-8 h-8 mb-4 text-yellow-600 bg-yellow-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    </div>
                    <h3 className="capitalize mb-2 text-base font-semibold leading-tight text-black">perfectionist</h3>
                    <p className="text-sm text-black opacity-75">I like things well made.</p>
                </div>
                <div style={{ width: "240px", height: "136px" }}>
                    <div className="flex items-center justify-center w-8 h-8 mb-4 text-purple-600 bg-purple-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                    </div>
                    <h3 className="capitalize mb-2 text-base font-semibold leading-tight text-black">organized</h3>
                    <p className="text-sm text-black opacity-75">I like to work in an organized and structured way to avoid wasting time.</p>
                </div>
                <div style={{ width: "240px", height: "136px" }}>
                    <div className="flex items-center justify-center w-8 h-8 mb-4 text-red-600 bg-red-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="capitalize mb-2 text-base font-semibold leading-tight text-black">respected deadlines </h3>
                    <p className="text-sm text-black opacity-75">Consistent and organized work to avoid delays in product delivery.</p>
                </div>
            </div>
        </section>
    )
}

export default FeatureList
