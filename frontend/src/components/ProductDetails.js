import { useState } from "react";
import Rating from '../components/Rating';
import MessageBox from '../components/MessageBox';

const ProductDetails = ({product, rating}) => {
    const reviewLength = product.reviews.length;
     const descriptionContent = <div className="tab-pane fade show active"    aria-labelledby="product-desc-link">
                                    <div className="product-desc-content">
                                        <h3>Product Information</h3>
                                        <p>{product.description}</p>
                                    </div>
                                </div>;
    const additionalInfoContent = <div className="tab-pane fade show active" id="product-info-tab"   aria-labelledby="product-info-link">
                                <div className="product-desc-content">
                                    <h3>Additional Information</h3>
                                    <p>{product.longDescription}</p>
                                </div>
                            </div>;
        const shippingContent =  <div className="tab-pane fade show active" id="product-shipping-tab"   aria-labelledby="product-shipping-link">
                                <div className="product-desc-content">
                                    <h3>Delivery & returns</h3>
                                    <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <a href="#">Delivery information</a><br/>
                                    We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <a href="#">Returns information</a></p>
                                </div>
                            </div>
        const reviewsContent = 
            <div className="tab-pane fade show active" id="product-review-tab"   aria-labelledby="product-review-link">
                <div className="reviews">
                    <h3>Reviews ({reviewLength})</h3>
                    <div className="review">
                        <div className="row no-gutters">
                            <div className="mb-3">
          {product.reviews.length === 0 && (
            <MessageBox>There is no review</MessageBox>
          )}
        </div>
                            {product.reviews.map((review) =>{
                                return(
                                    <div>
                                        <div className="col-auto">
                                            <h4>{review.name}</h4>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <Rating rating={review.rating} caption=" "></Rating>
                                                </div>
                                            </div>
                                            <span className="review-date">{review.createdAt.substring(0, 10)}</span>
                                        </div>
                                        <div className="col">
                                            <div className="review-content">
                                                <p>{review.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
    const [content, setContent] = useState(descriptionContent);
    const firstMenufunction = () => {
        setContent(descriptionContent)
    }
    const secondMenuFunction = () => {
        setContent(additionalInfoContent)
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
                    <p className="nav-link" >Description</p>
                </li>
                <li className="nav-item" onClick={secondMenuFunction}>
                    <p className="nav-link" >Additional information</p>
                </li>
                <li className="nav-item" onClick={thirdMenufunction}>
                    <p className="nav-link" >Shipping & Returns</p>
                </li>
                <li className="nav-item" onClick={fourthMenuContent}>
                    <p className="nav-link" >Reviews</p>
                </li>
            </ul>
            <div className="tab-content">
                {content}  
            </div>
        </div>
    )
}
export default ProductDetails