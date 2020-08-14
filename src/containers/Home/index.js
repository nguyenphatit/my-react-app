import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <React.Fragment>
            <div className="container mx-auto flex flex-col items-center">
                <Link to="/counter" className="bg-green-400 py-3 mb-5 px-5 text-4xl text-white rounded shadow-2xl hover:bg-green-600 transition duration-200">
                    Counter
                </Link>
                <Link to="/product-list" className="bg-green-400 py-3 mb-5 px-5 text-4xl text-white rounded shadow-2xl hover:bg-green-600 transition duration-200">
                    Shopping Cart
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Home;