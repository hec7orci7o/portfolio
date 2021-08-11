import { useEffect, useState } from "react";
import { useWindowScroll} from "react-use"

const ButtonUp = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisibility] = useState(false);

    useEffect(() => {(pageYOffset > 250) ? setVisibility(true) : setVisibility(false)}, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"})

    if (!visible) { return false}

    return (
        <button
            onClick={scrollToTop}
            className="flex justify-center items-center rounded-md bg-black fixed"
            style={{height: "60px", width: "60px", right: "50px", bottom: "50px"}}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
        </button>
    )
}

export default ButtonUp