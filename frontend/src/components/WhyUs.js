import { Link } from 'react-router-dom';

const WhyUs = () => {
    return (
        <div className="why-us">
            <div className="why-us-captions">
                <h1>Why Us?</h1>
                <h3>At Shopit, we understand that when it comes to sourcing the finest, freshest fish, discerning customers like you demand nothing but the best.</h3>
                <p>Freshness is more than just a promise to us at Shopit; it's our commitment. Every item of seafood we serve is as fresh as the ocean itself because of the hard work we do to ensure that. Our close collaborations with regional fishermen and sustainable fishing practices ensure a consistent supply of the best possible harvests every day. We know that when it comes to fresh seafood, prompt delivery is essential. Your order will be carefully packed and delivered to your door on time, maintaining the flawless quality of your seafood selection.</p>
                <div className="why-us-btn">
                    <Link to = "/aoutus" >
                        <button>Learn more</button>
                    </Link>
                </div>
            </div>
            <div className="testimonials">
                <div className="testimonial-card">
                    <h1 className="">❝</h1>
                    <p>For more than a year, I have been a devoted Shopit customer, and I have never been let down. 
                        The regular freshness of the fish and the timely delivery guarantee that I can have
                         restaurant-standard seafood at home.</p>
                    <h2>Olawale</h2>
                </div>
                <div className="testimonial-card">
                    <h1 className="">❝</h1>
                    <p>My order had a small problem, but Shopit's customer service went above and above to fix it right away. Their dedication to ensuring client satisfaction is quite admirable..</p>
                    <h2>Bright</h2>
                </div>
                <div className="testimonial-card">
                    <h1 className="">❝</h1>
                    <p>Shopit offers the ideal assortment of seafood for any occasion, be it a major event or a straightforward weekday supper. I can always choose the perfect fish for any occasion because to the diversity.</p>
                    <h2>Adenike</h2>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;