import facebook from "../assets/fish/pngs/facebook-logo.png";
import instagram from "../assets/fish/pngs/instagram-logo.png";
import whatsapp from "../assets/fish/pngs/whatsapp-logo.png";
import x from "../assets/fish/pngs/x-logo.png";
import { Link } from 'react-router-dom';



const Footer = () => {
    return(
        <div className="footer-main ">
            <div className="footer-about">
                <h1>SHOP IT </h1>
                <p>With the modest but aspirational objective of connecting seafood lovers with the freshest catches, sourced responsibly, and delivered straight to their homes, Shopit was formed out of a love for the ocean and a dedication to reinventing the seafood shopping experience.</p>
                <h6>Copyright © 2024. ShopIt limited. All Rights Reserved. Design by unclebayotics</h6>
            </div>
            <div className="footer-learn-more">
                <h1>EXPLORE </h1>
                <Link className = '' to={'/search?category=Fresh&query=all&price=all&rating=all&order=newest&page=1'}>
                    <p>Shop Fresh</p>
                </Link>
                <Link className = '' to={'/search?category=Shell&query=all&price=all&rating=all&order=newest&page=1'}>
                    <p>Shop ShellFish</p>
                </Link>
                <Link className = '' to={'/search?category=Smoked%20and%20dried&query=all&price=all&rating=all&order=newest&page=1'}>
                    <p>shop Smoked/Dried</p>
                </Link>
                <Link className = '' to={'/'}>
                    <p>Holiday Offers</p>
                </Link>
            </div>
            <div className="footer-about-us">
              <h1>LEARN ABOUT US</h1>
                <Link className = '' to={'/aboutus'}>
                    <p>About Us</p>
                </Link>
                <Link className = '' to={'/aboutus'}>
                    <p>Delivery</p>
                </Link>
                <Link className = '' to={'/contactus'}>
                    <p>Contact Us</p>
                </Link>
                <Link className = '' to={'/aboutus'}>
                    <p>privacy Policy</p>
                </Link>
            </div>
            <div className="footer-socials">
                <h1>FOLLOW US</h1>
                <div className="socials-main">
                    <Link className = '' to={'/'}>
                        <div className="facebook-social social-icon">
                            <img src= {facebook} alt="facebook-logo" className="social-logo"/>
                        </div>
                    </Link>
                    <Link className = '' to={'/'}>
                        <div className="instagram-social social-icon">
                            <img src= {instagram} alt="instagram-logo" className="social-logo"/>
                        </div>
                    </Link>
                    <Link className = '' to={'/'}>
                        <div className="twitter-social social-icon">
                            <img src= {x} alt="x-logo" className="social-logo"/>
                        </div>
                    </Link>
                    <Link className = '' to={'/'}>
                        <div className="whatsapp-social social-icon">
                            <img src= {whatsapp} alt="whatsapp-logo" className="social-logo"/>
                        </div>
                    </Link>
                </div>
                <h1 className="mt-4">ADDRESS</h1>
                <p>Chief Market, Epe Lagos, Nigeria</p>
                <h1 className="mt-4">PHONE</h1>
                <p>09031350523</p>
            </div>
        </div>
    )
}

export default Footer