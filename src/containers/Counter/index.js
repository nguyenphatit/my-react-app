import React from 'react';
import { connect } from 'react-redux';
import { counterIncrementAction, counterDecrementAction, incrementAsyncAction, decrementAsyncAction } from '../../actions/counterAction';

const Counter = (props) => {
    const { counter, counterIncrementDispatch, counterDecrementDispatch, counterIncrementAsyncDispatch, counterDecrementAsyncDispatch } = props;

    return (
        <React.Fragment>
            <h1 className="text-center text-5xl text-pink-500 font-bold">
                Counter
                <span role="img" aria-label="hello">🤲</span>
            </h1>
            <div className="container mx-auto text-center">
                <button
                    onClick={() => counterDecrementDispatch(counterDecrementAction)}
                    className="border border-pink-400 bg-pink-200 p-2 m-2">
                    Decrement (-)
                </button>
                <span className="border border-pink-400 p-2 m-2 rounded-md">{counter}</span>
                <button
                    onClick={() => counterIncrementDispatch(counterIncrementAction)}
                    className="border border-pink-400 bg-pink-200 p-2 m-2">
                    Increment (+)
                </button>
            </div>
            <div className="container mx-auto text-center">
                <button
                    onClick={() => counterDecrementAsyncDispatch(decrementAsyncAction)}
                    className="border border-pink-400 bg-pink-200 p-2 m-2">
                    Decrement Async
                </button>
                <button
                    onClick={() => counterIncrementAsyncDispatch(incrementAsyncAction)}
                    className="border border-pink-400 bg-pink-200 p-2 m-2">
                    Increment Async
                </button>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        counterIncrementDispatch: () => dispatch(counterIncrementAction),
        counterDecrementDispatch: () => dispatch(counterDecrementAction),
        counterIncrementAsyncDispatch: () => dispatch(incrementAsyncAction),
        counterDecrementAsyncDispatch: () => dispatch(decrementAsyncAction)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);