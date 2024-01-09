import facebook from "../assets/fish/pngs/facebook-logo.png";
import instagram from "../assets/fish/pngs/instagram-logo.png";
import whatsapp from "../assets/fish/pngs/whatsapp-logo.png";
import x from "../assets/fish/pngs/x-logo.png";


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
                <p>Shop All</p>
                <p>Shop ShellFish</p>
                <p>shop Smoked/Dried</p>
                <p>Holiday Offers</p>
            </div>
            <div className="footer-about-us">
              <h1>LEARN ABOUT US</h1>
                <p>About Us</p>
                <p>Delivery</p>
                <p>Contact Us</p>
                <p>privacy Policy</p>
            </div>
            <div className="footer-socials">
                <h1>FOLLOW US</h1>
                <div className="socials-main">
                    <div className="facebook-social social-icon">
                        <img src= {facebook} alt="facebook-logo" className="social-logo"/>
                    </div>
                    <div className="instagram-social social-icon">
                        <img src= {instagram} alt="instagram-logo" className="social-logo"/>
                    </div>
                    <div className="twitter-social social-icon">
                        <img src= {x} alt="x-logo" className="social-logo"/>
                    </div>
                    <div className="whatsapp-social social-icon">
                        <img src= {whatsapp} alt="whatsapp-logo" className="social-logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer