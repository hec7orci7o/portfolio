import { Link as Scroll } from "react-scroll";

const Footer = () => {
    return (
        <footer className="mt-32">
            <div className="flex flex-col flex-wrap justify-center p-3 md:flex-row">
                <nav className="flex flex-wrap items-center justify-center w-full mx-auto mb-5 text-base">
                    <Scroll
                        activeClass="text-black"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="cursor-pointer text-base text-center px-5 py-2 font-medium text-gray-600 hover:text-black capitalize"
                    >
                        about me
                    </Scroll>
                    <Scroll
                        activeClass="text-black"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="cursor-pointer text-base text-center px-5 py-2 font-medium text-gray-600 hover:text-black capitalize"
                    >
                        portfolio
                    </Scroll>
                    <Scroll
                        activeClass="text-black"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="cursor-pointer text-base text-center px-5 py-2 font-medium text-gray-600 hover:text-black capitalize"
                    >
                        contact
                    </Scroll>

                </nav>
                <span className="inline-flex justify-center w-full mx-auto mt-2 mr-2 sm:ml-auto sm:mt-0">
                    <a className="ml-3 text-blue-500 hover:text-black">
                        <svg className="w-6 h-6" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewBox="0 0 24 24">
                            <path d="M9.593 10.971c-.542 0-.969.475-.969 1.055 0 .578.437 1.055.969 1.055.541 0 .968-.477.968-1.055.011-.581-.427-1.055-.968-1.055zm3.468 0c-.542 0-.969.475-.969 1.055 0 .578.437 1.055.969 1.055.541 0 .968-.477.968-1.055-.001-.581-.427-1.055-.968-1.055z" />
                            <path d="M17.678 3H4.947A1.952 1.952 0 0 0 3 4.957v12.844c0 1.083.874 1.957 1.947 1.957H15.72l-.505-1.759 1.217 1.131 1.149 1.064L19.625 22V4.957A1.952 1.952 0 0 0 17.678 3zM14.01 15.407s-.342-.408-.626-.771c1.244-.352 1.719-1.13 1.719-1.13-.39.256-.76.438-1.093.562a6.679 6.679 0 0 1-3.838.398 7.944 7.944 0 0 1-1.396-.41 5.402 5.402 0 0 1-.693-.321c-.029-.021-.057-.029-.085-.048a.117.117 0 0 1-.039-.03c-.171-.094-.266-.16-.266-.16s.456.76 1.663 1.121c-.285.36-.637.789-.637.789-2.099-.067-2.896-1.444-2.896-1.444 0-3.059 1.368-5.538 1.368-5.538 1.368-1.027 2.669-.998 2.669-.998l.095.114c-1.71.495-2.499 1.245-2.499 1.245s.21-.114.561-.275c1.016-.446 1.823-.57 2.156-.599.057-.009.105-.019.162-.019a7.756 7.756 0 0 1 4.778.893s-.751-.712-2.366-1.206l.133-.152s1.302-.029 2.669.998c0 0 1.368 2.479 1.368 5.538 0-.001-.807 1.376-2.907 1.443z" />
                        </svg>
                    </a>
                    <a className="ml-3 text-blue-500 hover:text-black">
                        <svg className="w-6 h-6" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewBox="0 0 24 24">
                            <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" />
                            <circle cx="11.994" cy="11.979" r="3.003" />
                        </svg>
                    </a>
                    <a className="ml-3 text-blue-500 hover:text-black">
                        <svg className="w-6 h-6" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewBox="0 0 24 24">
                            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
                        </svg>
                    </a>
                </span>
            </div>
            <div className="bg-gray-100">
                <div className="container px-5 py-5 mx-auto flex justify-center">
                    <p className="text-sm text-center text-black sm:text-left "> © 2021 | Héctor Toral </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer