export const LogInStart = (userCredentials) => ({
    type:"LOGIN_START",
});

export const LogInSuccess = (user) => ({
    type:"LOGIN_SUCCESS",
    payload:user
});

export const LogInFail = () => ({
    type:"LOGIN_FAILURE",
});

export const LogOut = () => ({
    type:"LOGOUT",
});

export const UpdateStart = (userCredentials) => ({
    type:"UPDATE_START",
});

export const UpdateSuccess = (user) => ({
    type:"UPDATE_SUCCESS",
    payload:user,
});

export const UpdateFail = () => ({
    type:"UPDATE_FAILURE",
});
