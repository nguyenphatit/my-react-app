const { INCREMENT, DECREMENT, INCREMENT_ASYNC, DECREMENT_ASYNC } = require("../constants");

export const counterIncrementAction = {
    type: INCREMENT
}

export const counterDecrementAction = {
    type: DECREMENT
}

export const incrementAsyncAction = {
    type: INCREMENT_ASYNC
}

export const decrementAsyncAction = {
    type: DECREMENT_ASYNC
}