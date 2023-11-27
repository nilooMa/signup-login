export const validate = (data) => {
    const errors = {};
    if(!data.email) {
        errors.email = "Email Require";
    }else if(!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email is inCorrect";
    }else {
        delete errors.email;
    }

    if(!data.password) {
        errors.password = "Password is Require";
    }else if(data.password.length <6) {
        errors.password = "password must be more than 6 charecters";
    }else {
        delete errors.password;
    }
    return errors;
}