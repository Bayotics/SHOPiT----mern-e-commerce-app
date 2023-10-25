import fishPng from "../assets/fish/pngs/png-fish-four.png"

const About = () => {
    return(
        <div className="border about-landing-main">
            <div className="row">
                <div className="col">
                    <div className="about-captions">
                        <div className="about-heading pt-2">
                            <h1 className="text-white text-center">About Us</h1>
                        </div>
                        <div className="about-paragraph">
                            <p>
                            Welcome to shopit, your top-tier destination for the freshest and finest seafood available online. 
                            We at shopit are committed to bringing the abundance of the ocean right to your door.
                            Our commitment to provide a flawless, easy-to-use online purchasing experience is something we take great pride in,
                            and it drives everything we do. You can rely on us to provide you with the best, 
                            freshest, and most delicious seafood, elevating your whole eating experience. 
                            Explore the world of fresh seafood like never before by diving right in.
                            </p>
                        </div>
                        <div className="about-btn-main">
                            <button className="about-btn">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="col about-right-main">
                    <div className="about-img-container">
                        <img src={fishPng} alt="about-shopit" className="about-img-png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About