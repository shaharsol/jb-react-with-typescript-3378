import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../../home/home/Home"
import About from "../../about/about/About"
import Page404 from "../page404/Page404"

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/home" element={<Home />}/>
            {/* this is bad for SEO (search engine optimizatin), do not put same component on different routes <Route path="/" element={<Home />}/> */}
            <Route path="/" element={<Navigate to="/home" />}/>
            <Route path="/about" element={<About />}/>
            <Route path="*" element={<Page404 />}/>
        </Routes>
    )
}

export default Routing