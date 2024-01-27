import * as api from '../../api';

export const authActions = {
    SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

export const getActions = (dispatch) => {
    return {
        login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
        register: (userDetails, navigate) => dispatch(register(userDetails, navigate)),
    }
}

const setUserDetails = (userDetails) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails,
    }
}
const login = (userDetails, navigate) => {
    return async (dispatch) => {
        const res = await api.login(userDetails);

        if (res.error) {

        } else {
            const { userDetails } = res?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));
            dispatch(setUserDetails(userDetails));
            navigate('/dashboard')
        }
    }
}

const register = (userDetails, navigate) => {
    return async (dispatch) => {
        const res = await api.register(userDetails);

        if (res.error) {

        } else {
            const { userDetails } = res?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));
            dispatch(setUserDetails(userDetails));
            navigate('/dashboard')
        }
    }
}
