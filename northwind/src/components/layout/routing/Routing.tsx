import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../../home/home/Home"
import About from "../../about/about/About"
import Page404 from "../page404/Page404"
import ProductsList from "../../products/list/ProductsList"
import ProductDetails from "../../products/details/ProductDetails"
import AddProduct from "../../products/add/AddProduct"
import EditProduct from "../../products/edit/EditProduct"

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/home" element={<Home />}/>
            {/* this is bad for SEO (search engine optimizatin), do not put same component on different routes <Route path="/" element={<Home />}/> */}
            <Route path="/" element={<Navigate to="/home" />}/>
            <Route path="/about" element={<About />}/>
            {/* route params: any path element that starts with :*/}
            {/* I will later have access to it in the mounted component*/}
            <Route path="/products/add" element={<AddProduct />}/>
            <Route path="/products/edit/:id" element={<EditProduct />}/>
            <Route path="/products/:id" element={<ProductDetails />}/>
            <Route path="/products" element={<ProductsList />}/>
            <Route path="*" element={<Page404 />}/>
        </Routes>
    )
}

export default Routing