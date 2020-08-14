const { UPDATE_PRODUCT_SUCCESS } = require("../constants");

const initialProduct = [];

const productReducer = (state = initialProduct, aciton) => {
    switch (aciton.type) {
        case UPDATE_PRODUCT_SUCCESS:
            return state = aciton.payload

        default:
            return state
    }
}

export default productReducer;