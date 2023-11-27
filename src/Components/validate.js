export const validate = (data) => {
    
    const errors = {};
    if(!data.name.trim()){
        errors.name = "Name is required";
    } else{
        delete errors.name;
    }

    if(!data.email) {
        errors.email = "Email is required";
    } else if(!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email is not correct";
    } else{
        delete errors.email;
    }

    if(!data.password) {
        errors.password = "Password is required";
    }else if(data.password.length<6) {
        errors.password = "Password must be more than 6 charecters";
    }else {
        delete errors.password;
    }
    if(!data.confirmPassword) {
        errors.confirmPassword = "confirm the password";
    }else if(data.password !== data.confirmPassword) {
        errors.confirmPassword = "password and confirm password must be equal";
    }
    else {
        delete errors.confirmPassword;
    }
    if(data.isAccept) {
        delete errors.isAccept;
    } else {
        errors.isAccept = "please check the privacy policy";
    }

    return errors;
}