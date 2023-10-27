

const LandingPageCategory = () => {
    return(
        <div className="landing-category-main">
            <div className="category-heading"><h1 className="">Top <span className="tect-black">Categories</span></h1></div>
            <div className="row category-tiles">
                <div className="col category-tiles-first">
                    <div className="category-tiles-inner">
                        <h1>All fish</h1>
                        <div className="category-tiles-btn-main">
                            <button className="category-tiles-btn">Shop All</button>
                        </div>
                    </div>
                </div>
                <div className="col category-tiles-mid">
                    <div className="category-tiles-inner">
                        <h1>Shellfish</h1>
                        <div className="category-tiles-btn-main">
                            <button className="category-tiles-btn">Shop Shellfish</button>
                        </div>
                    </div>
                </div>
                <div className="col category-tiles-last">
                    <div className="category-tiles-inner">
                        <h1>Smoked/Dried</h1>
                        <div className="category-tiles-btn-main">
                            <button className="category-tiles-btn">Shop smoked/dried</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPageCategory