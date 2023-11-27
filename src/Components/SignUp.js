import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toastify';
import styles from './SignUp.module.css';

const SignUp = () => {
    const [data,setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccept: false
    });
    const[errors,setErrors] = useState({});
    const[touched,setTouched] = useState({});
    useEffect(() => {
        setErrors(validate(data));
    },[data])
    const clickHandler = (event)=> {
        if(event.target.name === "isAccept"){
            setData({...data, [event.target.name]: event.target.checked});
        }
        else{
            setData({...data, [event.target.name]: event.target.value});
        }
    }

    const focusHandler = (event) => {
        setTouched({...touched,[event.target.name]: true});
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if(Object.keys(errors).length != 0) {
            notify("FAILED","YOUR SIGNUP FAILED")
            setTouched({...touched,
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccept: true
                })
            }
            else {
                notify("success","YOUR SIGNUP SUCCESS")
            }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h1 className={styles.header}>Sign Up</h1>  
                <div className={styles.formFeild}>
                    <label>Name:</label>
                    <input type="text" name="name"
                     className={(errors.name && touched.name) ? styles.unCompleted : styles.formInput}
                      value={data.name} onChange={clickHandler} onFocus={focusHandler}/>
                    {(errors.name && touched.name) && <span>{errors.name}</span>}
                </div>
                <div className={styles.formFeild}>
                    <label>Email:</label>
                    <input type="text" name="email"
                    className={(errors.email && touched.email) ? styles.unCompleted : styles.formInput}
                    value={data.email} onChange={clickHandler} onFocus={focusHandler}/>
                    {(errors.email && touched.email) && <span>{errors.email}</span>}
                </div>
                <div className={styles.formFeild}>
                    <label>Password:</label>
                    <input type="password" name="password"
                    className={(errors.password && touched.password) ? styles.unCompleted : styles.formInput}
                    value={data.password} onChange={clickHandler} onFocus={focusHandler}/>
                    {(errors.password && touched.password) && <span>{errors.password}</span>}
                </div>
                <div className={styles.formFeild}>
                    <label>confirm Password:</label>
                    <input type="password" name="confirmPassword"
                    className={(errors.confirmPassword && touched.confirmPassword) ? styles.unCompleted : styles.formInput}
                    value={data.confirmPassword} onChange={clickHandler} onFocus={focusHandler}/>
                    {(errors.confirmPassword && touched.confirmPassword) && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formFeild}>
                    <div className={styles.checkboxContainer}>
                        <label>I Accept Terms Of Privacy Policy</label>
                        <input type="checkbox" name="isAccept" value={data.isAccept} onChange={clickHandler} onFocus={focusHandler}/>
                    </div>
                    {(errors.isAccept && touched.isAccept) && <span>{errors.isAccept}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to="/login">Login</Link>
                    <input type="submit" value="signup" />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;