import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import {Link} from "react-router-dom";
import phones_and_accessories from '../assets/phones_and_tab.jpg';
import computer from '../assets/computer_and_accessories.jpg';

const Categories = () => {

    const allCat = <div className="row g-3">
                    <div class="col-3">
                        <Link to={'/search?category=Phones%20and%20tablets'} className = 'nav-link text-dark'>
                            <div  id = "category-item">
                                <div class=" border bg-light phones-and-tab" id = "category-inner">
                                    <img
                                     src={phones_and_accessories}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "phones and tabs"/>
                                </div>
                                <p className='mt-2 text-center'>PHONES AND TABLETS</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=Computers%20and%20Computer%20Accessories'}>
                            <div  id = "category-item">
                                <div class="border bg-light computer_and_accessories" id = "category-inner">
                                    <img
                                     src={computer}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "phones and tabs"/>
                                </div>
                                <p className='mt-2 text-center'>COMPUTERS & COMPUTER ACCESSORIES</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=men%20fashion'}>
                            <div  id = "category-item">
                                <div class="p-3 border bg-light men_fashion" id = "category-inner"></div>
                                <p className='mt-2 text-center'>MEN FASHION</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=food%20and%20beverages'}>
                            <div  id = "category-item">
                                <div class="p-3 border bg-light food_and_beverages" id = "category-inner"></div>
                                <p className='mt-2 text-center'>FOOD AND BEVERAGES</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=fragrance'}>
                            <div  id = "category-item">
                                <div class="p-3 border bg-light fragrance" id = "category-inner"></div>
                                <p className='mt-2 text-center'>FRAGRANCE</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=household%20cleaning'}>
                            <div  id = "category-item">
                                <div class="p-3 border bg-light household_cleaning" id = "category-inner"></div>
                                <p className='mt-2 text-center'>HOUSEHOLD CLEANING</p>
                            </div>
                        </Link>
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