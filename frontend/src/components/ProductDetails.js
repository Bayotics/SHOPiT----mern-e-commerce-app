import { useState } from "react";

const ProductDetails = ({product}) => {

    const test = "second menu"
     const descriptionContent = <div className="tab-pane fade show active" id="product-desc-tab" role="tabpanel" aria-labelledby="product-desc-link">
                                    <div className="product-desc-content">
                                        <h3>Product Information</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. </p>
                                        <ul>
                                            <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. </li>
                                            <li>Vivamus finibus vel mauris ut vehicula.</li>
                                            <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                                        </ul>

                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. </p>
                                    </div>
                                </div>;
    const additionalInfoContent = <div className="tab-pane fade" id="product-info-tab" role="tabpanel" aria-labelledby="product-info-link">
                                <div className="product-desc-content">
                                    <h3>Information</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                                    <h3>Fabric & care</h3>
                                    <ul>
                                        <li>Faux suede fabric</li>
                                        <li>Gold tone metal hoop handles.</li>
                                        <li>RI branding</li>
                                        <li>Snake print trim interior </li>
                                        <li>Adjustable cross body strap</li>
                                        <li> Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
                                    </ul>

                                    <h3>Size</h3>
                                    <p>one size</p>
                                </div>
                            </div>;
        const shippingContent =  <div className="tab-pane fade" id="product-shipping-tab" role="tabpanel" aria-labelledby="product-shipping-link">
                                <div className="product-desc-content">
                                    <h3>Delivery & returns</h3>
                                    <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <a href="#">Delivery information</a><br/>
                                    We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <a href="#">Returns information</a></p>
                                </div>
                            </div>
        const reviewsContent = <div className="tab-pane fade" id="product-review-tab" role="tabpanel" aria-labelledby="product-review-link">
                                        <div className="reviews">
                                            <h3>Reviews (2)</h3>
                                            <div className="review">
                                                <div className="row no-gutters">
                                                    <div className="col-auto">
                                                        <h4><a>Samanta J.</a></h4>
                                                        <div className="ratings-container">
                                                            <div className="ratings">
                                                                <div className="ratings-val w-4/5"></div>
                                                            </div>
                                                        </div>
                                                        <span className="review-date">6 days ago</span>
                                                    </div>
                                                    <div className="col">
                                                        <h4>Good, perfect size</h4>

                                                        <div className="review-content">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                                                        </div>

                                                        <div className="review-action">
                                                            <a><i className="icon-thumbs-up"></i>Helpful (2)</a>
                                                            <a><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="review">
                                                <div className="row no-gutters">
                                                    <div className="col-auto">
                                                        <h4><a>John Doe</a></h4>
                                                        <div className="ratings-container">
                                                            <div className="ratings">
                                                                <div className="ratings-val w-full">
                                                            </div>
                                                        </div>
                                                        <span className="review-date">5 days ago</span>
                                                    </div>
                                                    <div className="col">
                                                        <h4>Very good</h4>
                                                        <div className="review-content">
                                                            <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                                                        </div>

                                                        <div className="review-action">
                                                            <a><i className ="icon-thumbs-up"></i>Helpful (0)</a>
                                                            <a><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    const [content, setContent] = useState(descriptionContent);
    const firstMenufunction = () => {
        setContent(descriptionContent)
    }
    const secondMenuFunction = () => {
        setContent(test)
    }
    const thirdMenufunction = () => {
        setContent(shippingContent)
    }
    const fourthMenuContent = () => {
        setContent(reviewsContent)
    }

    return (
        <div>
            <ul className="nav nav-pills justify-content-center" role="tablist">
                <li className="nav-item" onClick = {firstMenufunction}>
                    <a className="nav-link active" id="product-desc-link" data-toggle="tab" role="tab" aria-controls="product-desc-tab" aria-selected="true">Description</a>
                </li>
                <li className="nav-item" onClick={secondMenuFunction}>
                    <a className="nav-link" id="product-info-link" data-toggle="tab" role="tab" aria-controls="product-info-tab" aria-selected="false">Additional information</a>
                </li>
                <li className="nav-item" onClick={thirdMenufunction}>
                    <a className="nav-link" id="product-shipping-link" data-toggle="tab" role="tab" aria-controls="product-shipping-tab" aria-selected="false">Shipping & Returns</a>
                </li>
                <li className="nav-item" onClick={fourthMenuContent}>
                    <a className="nav-link" id="product-review-link" data-toggle="tab" role="tab" aria-controls="product-review-tab" aria-selected="false">Reviews (2)</a>
                </li>
            </ul>
            <div className="tab-content">
                {content}  
            </div>
        </div>
    )
}
export default ProductDetails