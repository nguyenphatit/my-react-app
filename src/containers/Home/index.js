import React from 'react';
import { connect } from 'react-redux';
import productAction from '../../actions/productAction';
import userAction from '../../actions/userAction';

const Home = (props) => {

    const { user, products, userDispatch, productDispatch } = props;

    const renderedProductDataStore = products.map((data, index) => {
        return <li className="my-2 text-3xl" key={`store-${index}`}>{data.name}</li>
    })

    userDispatch(userAction);

    return (
        <React.Fragment>
            <h1 className="text-center text-5xl text-pink-500 font-bold">
                <span role="img" aria-label="hello">🖐</span>
                Welcome to My application!
                <span role="img" aria-label="hello">✌</span>
            </h1>
            <h2 className="text-center text-3xl text-pink-500 font-semibold">
                <span role="img" aria-label="hello">😃</span>
                {user}
                <span role="img" aria-label="hello">😃</span>
            </h2>
            <div className="text-center">
                <button
                    onClick={() => productDispatch(productAction)}
                    className="border border-pink-400 bg-pink-100 hover:bg-pink-200 p-2 m-2 rounded">
                    Update Product
                </button>
            </div>
            <ul className="container mx-auto">
                {renderedProductDataStore}
            </ul>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        products: state.productReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userDispatch: () => dispatch(userAction),
        productDispatch: () => dispatch(productAction)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);