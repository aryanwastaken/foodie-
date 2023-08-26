import React from 'react'
import { Link } from 'react-router-dom';
import classes from './header.module.css';

export default function Header() {
  const user = {
    name : 'royden',
  };

  const cart = {
    totalcount : 10,
  };

  const logout = ()=> {}

    return(
    <header className={classes.header}>
        <div className={classes.container}>
            <Link to="/" className={classes.logo}>
                Foodie
            </Link>
            <nav>
                <ul>
                    {
                        user? (
                        <li className={classes.menu_container}>
                            <Link to="/profile">{user.name}</Link>
                            <div className={classes.menu}>
                                <Link to="/profile">profile</Link>
                                <Link to="/orders">Orders</Link>
                                <a onClick={logout}>Logout</a>
                            </div>
                        </li> 
                        ) : (
                        <Link to="/login">Login</Link>
                    )}
                        <li>
                            <Link to="/cart">Cart 
                            {cart.totalcount > 0 && <span className={classes.cart_count}>{cart.totalcount}</span>}
                            </Link>
                        </li>

                </ul>
            </nav>
        </div>
    </header>
    );
  
}
