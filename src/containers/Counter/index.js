import React from 'react';
import { connect } from 'react-redux';
import { decrementAction, incrementAction, decrementAsyncAction, incrementAsyncAction } from '../../actions/counterAction';

const Counter = (props) => {

    const { counter, decrementDispatch, incrementDispatch, decrementAsyncDispatch, incrementAsyncDispatch } = props;

    return (
        <React.Fragment>
            <h3 className="text-center text-5xl text-green-400 font-bold py-3 mb-5 uppercase">
                Counter
            </h3>
            <div className="container mx-auto flex flex-col items-center">
                <div>
                    <button onClick={() => decrementAsyncDispatch(decrementAsyncAction)} className="border border-green-600 bg-green-400 text-white p-3 m-3 rounded shadow-md hover:bg-green-600">Decrement Async</button>
                    <button onClick={() => decrementDispatch(decrementAction)} className="border border-green-600 bg-green-400 text-white p-3 m-3 rounded shadow-md hover:bg-green-600">Decrement</button>
                    <span className="m-5 p-5 text-3xl">{counter}</span>
                    <button onClick={() => incrementDispatch(incrementAction)} className="border border-green-600 bg-green-400 text-white p-3 m-3 rounded shadow-md hover:bg-green-600">Increment</button>
                    <button onClick={() => incrementAsyncDispatch(incrementAsyncAction)}  className="border border-green-600 bg-green-400 text-white p-3 m-3 rounded shadow-md hover:bg-green-600">Increment Async</button>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counterReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        decrementDispatch: () => dispatch(decrementAction),
        incrementDispatch: () => dispatch(incrementAction),
        decrementAsyncDispatch: () => dispatch(decrementAsyncAction),
        incrementAsyncDispatch: () => dispatch(incrementAsyncAction),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)