import "../Testimonial/testimonial.css"
import BrandLogo01 from '../../../asset/godrej-logo.png'
import BrandLogo02 from '../../../asset/cocacola.jpg'
import BrandLogo03 from '../../../asset/paypal.png'
import BrandLogo04 from '../../../asset/nvidia_logo.jpg'
import BrandLogo05 from '../../../asset/apple_logo.png'
function Brands(){
    return (
        <div>
            <div className="brands">
                <div className="small-container">
                    <div className="brands-row">
                        <div className="col-5">
                            <img src={BrandLogo01}/>
                        </div>
                        <div className="col-5">
                            <img src={BrandLogo02}/>
                        </div>
                        <div className="col-5">
                            <img src={BrandLogo03}/>
                        </div>
                        <div className="col-5">
                            <img src={BrandLogo04}/>
                        </div>
                        <div className="col-5">
                            <img src={BrandLogo05}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brands