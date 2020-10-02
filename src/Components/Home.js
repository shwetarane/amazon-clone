import React from 'react';
import "../static/css/Home.css"
import Product from "./Product"
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src={require('../static/images/background.jpg')}
                    alt=""/>
                <div className="home__row">
                    {/* product */}
                    <Product
                        id="12345"
                        title="Sapiens: A Brief History of Humankind"
                        price={19.99}
                        image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595674533i/23692271._UY2560_SS2560_.jpg"
                        rating={3}/>
                    <Product
                        id="12334"
                        title="Homo Deus: A Brief History of Tomorrow"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41FYAMRN6TL._SX331_BO1,204,203,200_.jpg"
                        rating={3}/>
                </div>

                <div className="home__row">
                    <Product
                        id="36544"
                        title="Amazon Smart Plug, works with Alexa – A Certified for Humans Device"
                        price={49.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3He5CP3JbuoObW27vcIq66ed6-AwQ1nW8CA&usqp=CAU"
                        rating={3}/>
                    <Product
                        id="89034"
                        title="AmazonBasics Plastic Cutlery Fork, Light Weight, White, 1000 Forks"
                        price={8.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51weZfJsviL._AC_SL1500_.jpg"
                        rating={3}/>
                    <Product
                        id="90834"
                        title="AmazonBasics Reusable Flexible Soft Sided Ice Pack, Blue, Pack of 4"
                        price={15.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/912SDLiTJqL._SL1500_.jpg"
                        rating={3}/>
                    <Product
                        id="67834"
                        title="Alcohol Hand Sanitizer Gel w/Soothing Aloe FDA # 74035-1051-5, 16 Fl Oz, Pack of 2"
                        price={9.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81yAomED-xL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg"
                        rating={3}/>
                </div>

                <div className="home__row">
                    <Product
                        id="67834"
                        title="AmazonBasics Slim Carry On Travel Backpack"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/A17ik0Taz5L._AC_UY679_.jpg"
                        rating={3}/>
                    <Product
                        id="34534"
                        title="AmazonBasics 6 Outlet, Wall Mount Surge Protector, Power Strip, 2 USB ports 3.4A, 1080 Joules"
                        price={16.38}
                        image="https://m.media-amazon.com/images/I/51BEN7wlRJL._AC_UL320_.jpg"
                        rating={4}/>
                    <Product
                        id="56234"
                        title="AmazonBasics HDMI to DVI Adapter Cable, Black, 6 Feet, 1-Pack"
                        price={7.69}
                        image="https://images-na.ssl-images-amazon.com/images/I/711lDrVDlpL._AC_SL1494_.jpg"
                        rating={4}/>
                </div>

            </div>
        </div>
    )
}

export default Home
