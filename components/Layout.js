import Meta from "./Meta"
import Nav from "./Nav"
import ButtonUp from "./ButtonUp"
import Footer from "./Footer"
import { Fragment } from "react"

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Meta />
            <Nav />
            <div>
                { children}
            </div>
            <ButtonUp />
            <Footer />
        </Fragment>
    )
}

export default Layout