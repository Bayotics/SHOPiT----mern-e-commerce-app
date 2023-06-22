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
    <div className="row g-3" id = "all-cat">
                    <div class="col-3" id = "phones-and-tab">
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Men%20Fashion'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Food%20and%20Beverages'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Fragrance'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Household%20Cleaning'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Drinks'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Appliances'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Baby%20Products'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Books'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Generators%20and%20Portable%20power'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Make%20Up'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Hair%20Care'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Music'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Oral%20Care'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Pets'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=sporting%20accessories'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Watches'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Men%20Shoes'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Women%20Fashion'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Women%20Shoes'}>
                            <div  id = "category-item">
                                <div class="border bg-light women_shoes" id = "category-inner">
                                    <img
                                     src={women_shoes}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "women_shoes"/>
                                </div>
                                <p className='mt-2 text-center'>WOMEN SHOES</p>
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
                <div className="row g-3" id = "electronics-cat">
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
                    <div class="col-3" id = "appliances">
                        <Link className = 'nav-link text-dark' to={'/search?category=Appliances'}>
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
                </div>
    const fashionCat = 
        <div className="row g-3" id = "fashion-cat">
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=Fragrance'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Hair%20Care'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Men%20Fashion'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Women%20Fashion'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Men%20Shoes'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Men%20Shoes'}>
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
                        <Link className = 'nav-link text-dark' to={'/search?category=Women%20Shoes'}>
                            <div  id = "category-item">
                                <div class="border bg-light women_shoes" id = "category-inner">
                                    <img
                                     src={women_shoes}
                                     style={{height: "100%", width: "100%"}}
                                       alt= "women_shoes"/>
                                </div>
                                <p className='mt-2 text-center'>WOMEN SHOES</p>
                            </div>
                        </Link>
                    </div>
                    <div class="col-3">
                        <Link className = 'nav-link text-dark' to={'/search?category=Make%20Up'}>
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
        </div>
    const foodCat = 
                <div className="row g-3" id = "food-cat">
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