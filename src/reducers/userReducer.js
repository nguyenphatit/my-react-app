const { UPDATE_USER_SUCCESS } = require("../constants");

const initinalUser = '';

const userReducer = (state = initinalUser, action) => {
    switch (action.type) {
        case UPDATE_USER_SUCCESS:
            return state = action.payload

        default:
            return state
    }
}

export default userReducer;