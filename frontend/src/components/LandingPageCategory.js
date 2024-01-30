import { Link } from 'react-router-dom';


const LandingPageCategory = () => {
    return(
        <div className="landing-category-main">
            <div className="category-heading"><h1 className="">Top <span className="tect-black">Categories</span></h1></div>
            <div className="row category-tiles">
                <div className="col category-tiles-first">
                    <div className="category-tiles-inner">
                        <h1>Fresh fish</h1>
                        <div className="category-tiles-btn-main">
                            <Link className = 'nav-link text-dark' to={'/search?category=Fresh&query=all&price=all&rating=all&order=newest&page=1'}>
                                <button className="category-tiles-btn">Shop Fresh fish</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col category-tiles-mid">
                    <div className="category-tiles-inner">
                        <h1>Shellfish</h1>
                        <div className="category-tiles-btn-main">
                            <Link className = 'nav-link text-dark' to={'/search?category=Shell&query=all&price=all&rating=all&order=newest&page=1'}>
                                <button className="category-tiles-btn">Shop Shellfish</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col category-tiles-last">
                    <div className="category-tiles-inner">
                        <h1>Smoked/Dried</h1>
                        <div className="category-tiles-btn-main">
                            <Link className = 'nav-link text-dark' to={'/search?category=Smoked%20and%20dried&query=all&price=all&rating=all&order=newest&page=1'}>
                                <button className="category-tiles-btn">Shop Smoked/dried</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPageCategory