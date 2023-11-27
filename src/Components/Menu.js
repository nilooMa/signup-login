import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
        </div>
    );
};

export default Menu;