import subscribeIcon from '../assets/fish/pngs/subscribe.png'
import discountIcon from '../assets/fish/pngs/discount.png'
import experienceIcon from '../assets/fish/pngs/experience.png'

const LandingPageSubscribe = () => {
    return (
        <div className="subscribe-comp-main">
            <div className="subscribe-heading">
                <h1>From the sea straight to your doorstep, anywhere in Nigeria</h1>
            </div>
            <div className="subscribe-comp-inner-main">
                <div className="subscribe-comp-inner">
                    <div className="subscribe-comp-inner-icon">
                        <img src= {subscribeIcon}  alt = "Subscribe Icon"/>
                    </div>
                    <div className="subscribe-comp-inner-p">
                        <p className="text-center">
                            Get seafood updates as soon as they are available. Skip, or terminate at any moment.
                        </p>
                    </div>
                    <div className="subscribe-comp-inner-btn">
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
                <div className="subscribe-comp-inner">
                    <div className="subscribe-comp-inner-icon">
                        <img src= {discountIcon}  alt = "Subscribe Icon"/>
                    </div>
                    <div className="subscribe-comp-inner-p">
                        <p className="text-center">
                            free delivery to anwhere in lagos when you order above N30,000.
                        </p>
                    </div>
                    <div className="subscribe-comp-inner-btn">
                        <button>Shop now</button>
                    </div>
                </div>
                <div className="subscribe-comp-inner">
                    <div className="subscribe-comp-inner-icon">
                        <img src= {experienceIcon}  alt = "Subscribe Icon"/>
                    </div>
                    <div className="subscribe-comp-inner-p">
                        <p className="text-center">
                            Years' worth of experience at your disposal.
                        </p>
                    </div>
                    <div className="subscribe-comp-inner-btn">
                    <   button>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPageSubscribe