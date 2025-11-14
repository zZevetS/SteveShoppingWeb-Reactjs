// import Categories from "./Categories/Categories.jsx"
import ProductView from "./Product/ProductView.jsx"
import OfferView from "./Offer/Offer.jsx"
import Testimonial from "./Testimonial/Testimonial.jsx"
import Brands from "./Brands/Brands.jsx"
function Home () { 
    return (
        <div>
            <title>Home Page</title>
            {/* <Categories/> */}
            <ProductView/>
            <OfferView/>
            <Testimonial/>
            <Brands/>
        </div>
    )
}

export default Home