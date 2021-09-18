import { useState, useEffect, Fragment } from "react"
import { Link as Scroll } from "react-scroll";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
    }, []);

    const changeBackground = () => {
        if (window.scrollY > 20) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    return (
        <div className={`z-50 sticky top-0 px-4 py-5 mx-auto  md:px-24 lg:px-8 ${navbar ? "bg-white" : ""}`} >
            <div className="h-5 flex items-center justify-center">
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <Scroll
                            activeClass=""
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className={`cursor-pointer font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 ${navbar ? "" : "text-gray-300 hover:text-white"}`}
                        >
                            About Me
                        </Scroll>
                    </li>
                    <li>
                        <Scroll
                            activeClass=""
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className={`cursor-pointer font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 ${navbar ? "" : "text-gray-300 hover:text-white"}`}
                        >
                            Portfolio
                        </Scroll>
                    </li>
                    <li>
                        <Scroll
                            activeClass=""
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-225}
                            duration={500}
                            className={`cursor-pointer font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 ${navbar ? "" : "text-gray-300 hover:text-white"}`}
                        >
                            Contact
                        </Scroll>
                    </li>
                </ul>
                <div className="w-full lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="mt-3 mr-4 absolute top-0 right-0 p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className={`w-5 ${navbar ? "text-black" : "text-white"}`} viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen ? (
                        <div className="w-full inline-block text-left ">
                            <div className="mr-4 origin-top-right absolute right-0 mt-3 w-1/2 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <Scroll
                                        activeClass=""
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                                    >
                                        <span className="flex flex-col">
                                            <p>About Me</p>
                                        </span>
                                    </Scroll>
                                    <Scroll
                                        activeClass=""
                                        to="portfolio"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                                    >
                                        <span className="flex flex-col">
                                            <p>Portfolio</p>
                                        </span>
                                    </Scroll>
                                    <Scroll
                                        activeClass=""
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-225}
                                        duration={500}
                                        className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                                    >
                                        <span className="flex flex-col">
                                            <p>Contact</p>
                                        </span>
                                    </Scroll>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Fragment></Fragment>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav