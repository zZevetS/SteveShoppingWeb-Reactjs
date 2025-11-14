import '../Testimonial/testimonial.css'
import BF02 from "../../../asset/BF02.jpg"
import BF01 from "../../../asset/BF01.jpg"
import BF03 from "../../../asset/BF03.png"
function Testimonial () {
    return (
        <div>
            <div className="testimonial">
                <div className="small-container-testi">
                    <div className="row">
                        <div class="col-3">
                            <i class="fa fa-quote-left"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever</p>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <img src={BF01} />
                                <h3>Omi Parker</h3>
                        </div>   
                        <div class="col-3">
                            <i class="fa fa-quote-left"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever</p>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <img src={BF02}/>
                                <h3>Sam John</h3>
                        </div>
                        <div class="col-3">
                            <i class="fa fa-quote-left"></i>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever</p>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <img src={BF03}/>
                                <h3>Marbel Joe</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial