import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import barber from '../assets/img/barber.png';


const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <div className="header__wrap">
                        <div className="logo">
                            <Link to='/'><img src={barber} alt='logo' />
                                <span className='slogan'> Barber System</span></Link>
                    
                </div>
                <nav>
                     <ul className="menu">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
                                        end
                                    >
                                        Home
                                    </NavLink>
                            
                        </li>
                        <li>
                            <NavLink to="/about">
                           About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                               Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>
            </div>
        </header>
    );
};

export default Header;
