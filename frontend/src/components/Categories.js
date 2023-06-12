import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

const Categories = () => {

    const allCat = <div className="row g-3">
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                </div>
    const electronicsCat = 
                <div className="row g-3">
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Phones and tablets</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Computers and Computer Accessories</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Electronics</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Gaming and toys</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Appliances</p>
                        </div>
                    </div>
                </div>
    const fashionCat = 
                <div className="row g-3">
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Fragrance</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Hair Care</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Men's Fashion</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Women's Fashion</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Watches</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Sunglasses</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Fashion</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Men's Shoes</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Women's Shoes</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Make up</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Personal care</p>
                        </div>
                    </div>
        </div>
    const foodCat = 
                <div className="row g-3">
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Food, fruits and Beverages</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Drinks</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Health Care</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div  id = "category-item">
                            <div class="p-3 border bg-light" id = "category-inner"></div>
                            <p className='mt-2 text-center'>Personal care</p>
                        </div>
                    </div>
        </div>

        const [cat, setCat] = useState(allCat);
        const allFunc = () => {
            setCat(allCat);
        };
        const electronicsFunc = () => {
            setCat(electronicsCat);
        };
        const fashionFunc = () => {
            setCat(fashionCat);
        };
        const foodFunc = () => {
            setCat(foodCat);
        }
    return(
        <div className='mt-4 border'>
            <h1 className='text-center fw-bold'>TOP CATEGORIES</h1>
            <div className="border categories-list container">
                <div className="categories-nav d-inline row">
                     <Nav className="me-auto  w-100  justify-content-center">
                        <div onClick={allFunc} className='nav-link text-dark'>ALL</div>
                        <div onClick = {electronicsFunc} className='nav-link text-dark'>ELECTRONICS & TECH</div>
                        <div onClick={fashionFunc} className='nav-link text-dark'>FASHION</div>
                        <div onClick={foodFunc} className='nav-link text-dark'>FOOD & HEALTH</div>
                      </Nav>
                </div>
            </div>
            <div className ="container mt-4">
                <div className="row g-3">
                    {cat}
                    {/* All */}
                    
                    {/* electronics and tech */}
                    {/* Fashion */}
                 
                    {/* Food */}
                    
                    {/* FURNITURE */}
                </div>
            </div>
        </div>
    )
}

export default Categories;