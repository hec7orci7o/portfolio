import Image from "next/image"
import Link from "next/link"
import img from "/public/me/me.jpg"
import foto from "/public/me/foto.jpg"

import { Link as Scroll } from "react-scroll";

const Header = () => {
    return (
        <section className="relative text-gray-400 bg-black body-font -mt-16 mb-10">
            <div className="max-w-7xl mx-auto flex py-20 md:flex-row flex-col items-center">
                <div className="ml-4 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="z-10 title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hi,
                        <br className="hidden lg:inline-block" />I'm Héctor.
                    </h1>
                    <p className="z-10 mb-8 leading-relaxed text-white opacity-75">A student of computer engineering driven by the desire to learn something new every day. <br />What am I doing now?</p>
                    <div className="flex justify-center">
                        <Scroll
                            activeClass="text-white"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}
                            className="cursor-pointer font-semibold w-36 justify-center z-10 inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
                        >
                            Contact
                        </Scroll>
                        <button disabled className="disabled:opacity-50 font-semibold w-36 justify-center z-10 ml-4 inline-flex text-white border-2 border-white py-1 px-6 focus:outline-none hover:text-white rounded text-lg">CV</button>
                    </div>
                </div>
                <div className="mr-4 relative h-96 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                    <Image
                        src={foto}
                        className="z-10 rounded-lg object-center filter brightness-80"
                        alt="Picture of the author"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute bottom-0 right-0 mr-2 mb-2 flex flex-wrap justify-between z-10">
                        <Link href="mailto:contact@hec7or.me">
                            <a className="z-10 mx-2.5 ml-auto text-white hover:text-black" title="like">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <Image
                src={img}
                className="filter brightness-45 z-0 object-bottom blur"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
            />
        </section>
    )
}

export default Header