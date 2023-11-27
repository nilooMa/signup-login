import React,{useState,useEffect} from 'react';
import { validate } from './validateLogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toastify';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';

const Login = () => {
    const[data, setData] = useState({
        username: "",
        password: ""
    });
    const[error,setError] = useState({});
    const[touched,setTouched] = useState({});

    useEffect(() => {
        setError(validate(data));
    },[data]);

    const changeHandler = (event) => {
        setData({...data,
            [event.target.name]: event.target.value
        });
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if(Object.keys(error).length != 0) {
            notify("FAILED","YOUR Login FAILED")
            setTouched({
                email: true,
                password: true
            })
        }
        else {
            notify("success","YOUR Login SUCCESS")
        }
    }
    const focuskHandler = (event) => {
        setTouched({...touched,
            [event.target.name]: true
        })
    }
    
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h1 className={styles.header}>Login</h1>
                <div className={styles.formFeild}>
                    <label>Email: </label>
                    <input type="text" name="email"
                    className={(error.email && touched.email) ? styles.unCompleted : styles.formInput}
                    value={data.email} onChange={changeHandler} onFocus={focuskHandler} />
                    {(error.email && touched.email) && <span>{error.email}</span>}
                </div>
                <div className={styles.formFeild}>
                    <label>Password: </label>
                    <input type="password" name="password"
                    className={(error.password && touched.password) ? styles.unCompleted : styles.formInput}
                    value={data.password} onChange={changeHandler} onFocus={focuskHandler} />
                    {(error.password && touched.password) && <span>{error.password}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to="/signup">SignUp</Link>
                    <input type="submit" value="Login" />
                </div>   
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;