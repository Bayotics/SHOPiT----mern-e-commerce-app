import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import {Link} from "react-router-dom";
import phones_and_accessories from '../assets/phones_and_tab.jpg';
import computer from '../assets/computer_and_accessories.jpg';
import men_fashion from '../assets/men_fashion.jpg';
import food_and_beverages from '../assets/food_and_beverages.jpg';
import fragrance from '../assets/fragrance.jpg';
import household_cleaning from '../assets/household_cleaning.jpg';
import appliances from '../assets/appliances.jpg';
import baby_products from '../assets/baby_products.jpg';
import books from '../assets/books.jpeg';
import drinks from '../assets/drinks.jpg';
import furniture from '../assets/furniture.jpg';
import gaming from '../assets/gaming.jpg';
import generator from '../assets/generator.jpg';
import glasses from '../assets/glasses.jpeg';
import hair_care from '../assets/hair_care.jpg';
import makeup from '../assets/makeup.jpg';
import men_shoes from '../assets/men_shoes.jpg';
import music from '../assets/music.jpg';
import oral_care from '../assets/oral_care.jpg';
import others from '../assets/others.jpeg';
import pets from '../assets/pets.jpg';
import skincare from '../assets/skincare.jpg';
import sporting from '../assets/sporting.jpeg';
import vehicles from '../assets/vehicles.jpg';
import watches from '../assets/watches.jpg';
import women_fashion from '../assets/women_fashion.jpg';
import women_shoes from '../assets/women_shoes.jpg';

const Categories = () => {

    const allCat =
    <div className="row g-3">
                    <div class="col-3">
                        <Link to={'/search?category=Phones%20and%20tablets'} className = 'nav-link text-dark'>
                            <div  id = "category-item">
                                <div class="bg-light phones-and-tab" id = "category-inner">
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
                                <div class="bg-light computer_and_accessories" id = "category-inner">
                                    <img
                                     src={computer}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "computer_and_accessories"/>
                                </div>
                                <p className='mt-2 text-center'>COMPUTERS & COMPUTER ACCESSORIES</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=men%20fashion'}>
                            <div  id = "category-item">
                                <div class="border bg-light men_fashion" id = "category-inner">
                                    <img
                                     src={men_fashion}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "men_fashion"/>
                                </div>
                                <p className='mt-2 text-center'>MEN FASHION</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=food%20and%20beverages'}>
                            <div  id = "category-item">
                                <div class=" border bg-light food_and_beverages" id = "category-inner">
                                    <img
                                     src={food_and_beverages}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "food and beverages"/>
                                </div>
                                <p className='mt-2 text-center'>FOOD AND BEVERAGES</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=fragrance'}>
                            <div  id = "category-item">
                                <div class="border bg-light fragrance" id = "category-inner">
                                    <img
                                     src={fragrance}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "fragrance"/>
                                </div>
                                <p className='mt-2 text-center'>FRAGRANCE</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=household%20cleaning'}>
                            <div  id = "category-item">
                                <div class="border bg-light household_cleaning" id = "category-inner">
                                    <img
                                     src={household_cleaning}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "household_cleaning"/>
                                </div>
                                <p className='mt-2 text-center'>HOUSEHOLD CLEANING</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=drinks'}>
                            <div  id = "category-item">
                                <div class="border bg-light drinks" id = "category-inner">
                                    <img
                                     src={drinks}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "drinks"/>
                                </div>
                                <p className='mt-2 text-center'>DRINKS</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=appliances'}>
                            <div  id = "category-item">
                                <div class="border bg-light appliances" id = "category-inner">
                                    <img
                                     src={appliances}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "appliances"/>
                                </div>
                                <p className='mt-2 text-center'>APPLIANCES</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=baby%20products'}>
                            <div  id = "category-item">
                                <div class="border bg-light baby_products" id = "category-inner">
                                    <img
                                     src={baby_products}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "baby_products"/>
                                </div>
                                <p className='mt-2 text-center'>BABY PRODUCTS</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=books'}>
                            <div  id = "category-item">
                                <div class="border bg-light books" id = "category-inner">
                                    <img
                                     src={books}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "books"/>
                                </div>
                                <p className='mt-2 text-center'>BOOKS</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=furniture'}>
                            <div  id = "category-item">
                                <div class="border bg-light furniture" id = "category-inner">
                                    <img
                                     src={furniture}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "furniture"/>
                                </div>
                                <p className='mt-2 text-center'>FURNITURE</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=generator'}>
                            <div  id = "category-item">
                                <div class="border bg-light generator" id = "category-inner">
                                    <img
                                     src={generator}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "generator"/>
                                </div>
                                <p className='mt-2 text-center'>GENERATOR</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=gaming'}>
                            <div  id = "category-item">
                                <div class="border bg-light gaming" id = "category-inner">
                                    <img
                                     src={gaming}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "gaming"/>
                                </div>
                                <p className='mt-2 text-center'>GAMING</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=glasses'}>
                            <div  id = "category-item">
                                <div class="border bg-light glasses" id = "category-inner">
                                    <img
                                     src={glasses}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "glasses"/>
                                </div>
                                <p className='mt-2 text-center'>GLASSES</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=make%20up'}>
                            <div  id = "category-item">
                                <div class="border bg-light makeup" id = "category-inner">
                                    <img
                                     src={makeup}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "makeup"/>
                                </div>
                                <p className='mt-2 text-center'>MAKE UP</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=hair%20care'}>
                            <div  id = "category-item">
                                <div class="border bg-light hair-care" id = "category-inner">
                                    <img
                                     src={hair_care}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "hair_care"/>
                                </div>
                                <p className='mt-2 text-center'>HAIR CARE</p>
                            </div>
                        </Link>
                    </div>
                     <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=men%20shoes'}>
                            <div  id = "category-item">
                                <div class="border bg-light men-shoes" id = "category-inner">
                                    <img
                                     src={men_shoes}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "men_shoes"/>
                                </div>
                                <p className='mt-2 text-center'>MEN SHOES</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=music'}>
                            <div  id = "category-item">
                                <div class="border bg-light music" id = "category-inner">
                                    <img
                                     src={music}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "music"/>
                                </div>
                                <p className='mt-2 text-center'>MUSIC</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=oral%20care'}>
                            <div  id = "category-item">
                                <div class="border bg-light oral_care" id = "category-inner">
                                    <img
                                     src={oral_care}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "oral_care"/>
                                </div>
                                <p className='mt-2 text-center'>ORAL CARE</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=pets'}>
                            <div  id = "category-item">
                                <div class="border bg-light pets" id = "category-inner">
                                    <img
                                     src={pets}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "pets"/>
                                </div>
                                <p className='mt-2 text-center'>PETS</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=sporting'}>
                            <div  id = "category-item">
                                <div class="border bg-light sporting" id = "category-inner">
                                    <img
                                     src={sporting}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "sporting"/>
                                </div>
                                <p className='mt-2 text-center'>SPORTING</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=skin%20care'}>
                            <div  id = "category-item">
                                <div class="border bg-light skin_care" id = "category-inner">
                                    <img
                                     src={skincare}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "skin_care"/>
                                </div>
                                <p className='mt-2 text-center'>SKIN CARE</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=vehicles'}>
                            <div  id = "category-item">
                                <div class="border bg-light vehicles" id = "category-inner">
                                    <img
                                     src={vehicles}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "vehicles"/>
                                </div>
                                <p className='mt-2 text-center'>VEHICLES</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=watches'}>
                            <div  id = "category-item">
                                <div class="border bg-light watches" id = "category-inner">
                                    <img
                                     src={watches}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "watches"/>
                                </div>
                                <p className='mt-2 text-center'>WATCHES</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=men%20shoes'}>
                            <div  id = "category-item">
                                <div class="border bg-light men_shoes" id = "category-inner">
                                    <img
                                     src={men_shoes}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "men_shoes"/>
                                </div>
                                <p className='mt-2 text-center'>MEN SHOES</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=women%20fashion'}>
                            <div  id = "category-item">
                                <div class="border bg-light women_fashion" id = "category-inner">
                                    <img
                                     src={women_fashion}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "women_fashion"/>
                                </div>
                                <p className='mt-2 text-center'>WOMEN FASHION</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=others'}>
                            <div  id = "category-item">
                                <div class="border bg-light others" id = "category-inner">
                                    <img
                                     src={others}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "others"/>
                                </div>
                                <p className='mt-2 text-center'>OTHERS</p>
                            </div>
                        </Link>
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
            <div className =" mt-4">
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