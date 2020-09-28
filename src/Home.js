import React from 'react';
import "./static/css/Home.css"
import Product from "./Product"
function Home() {
    return (
        <div className="home">
        <div className="home__container">
            <img className="home__image"
                 src={require('./static/images/background.jpg')} alt="" />
        <div className="home__row">
        {/* product */}
        <Product />
        <Product />
        {/* product */}
        </div>

        <div className="home__row">
        {/* product */}
        {/* product */}
        {/* product */}
        {/* product */}
        </div>

        <div className="home__row">
        {/* product */}
        {/* product */}
        </div>

        </div>
        </div>
    )
}

export default Home
