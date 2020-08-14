const { INCREMENT, DECREMENT } = require("../constants");

const initialCounter = 0;

const counterReducer = (state = initialCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        default:
            return state;
    }
}

export default counterReducer;