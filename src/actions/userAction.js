const { UPDATE_USER } = require("../constants");

const userAction = {
    type: UPDATE_USER,
    payload: { id: 1 }
}

export default userAction;