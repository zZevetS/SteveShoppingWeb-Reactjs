import "../Footer/footer.css"
import Download01 from '../../asset/appstore.png'
import Download02 from '../../asset/Google-Play.png'
import BrandLogo from '../../asset/amazon.png'
function Footer(){
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col-1">
                            <h3>Download our App</h3>
                            <p>Download App for Android and ios mobile device</p>
                            <div className="app-logo">
                                <img style={{marginBottom: 22}} src={Download01}/>
                                <img src={Download02}/>
                            </div>
                        </div>
                        <div className="footer-col-2">
                            <img src={BrandLogo} width="125px"/>
                            <p>Our Purpose is to Sustainably Make the Pleasure and 
                            benefits of sports Accessible to the Many.</p>
                        </div>
                        <div className="footer-col-3">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Blog Post</li>
                                <li>Return Policy</li>
                                <li>Join Affiliate</li>
                            </ul>
                        </div>
                        <div className="footer-col-4">
                            <h3>Follow Us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>instagram</li>
                                <li>YouTube</li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <p className="copyright">Copyright 2025 - SteveTech Solutions</p>
                </div>          
            </div>
        </div>
    )
}

export default Footer