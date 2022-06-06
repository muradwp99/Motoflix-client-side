import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/img/MotoFlix Logo.png"
import auth from '../firebase.init';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className=''>
            <div className="">
                <div className='nav-border '>
                    <div className='top-bar' expand="lg">
                        <div className='inside-content  container'>
                            <div className="left-info">
                                <select value="English">
                                    <option value="english">English</option>
                                    <option value="Bengali">Bengali</option>
                                </select>
                                <p>East London, United Kingdom</p>
                            </div>
                            <div className="social-icons">
                                <div className="icons">
                                    <FontAwesomeIcon className='icon text-light' icon={faFacebook} />
                                    <FontAwesomeIcon className='icon text-light' icon={faGoogle} />
                                    <FontAwesomeIcon className='icon text-light' icon={faYoutube} />
                                    <FontAwesomeIcon className='icon text-light' icon={faInstagram} />
                                </div>
                                {
                                    user ?
                                        <div className='profile'>
                                            <img width='30' src={user.photoURL} alt="" srcset="" />
                                            <p>{user.displayName}</p>
                                            <Nav.Link> <button onClick={() => signOut(auth)} className="menu-item btn" style={{ textDecoration: 'none', color: "#23393d", backgroundColor: "#ffbf00", fontWeight: 600 }}>Sign out</button> </Nav.Link>
                                        </div>
                                        :
                                        <Nav.Link ><NavLink className="top-menu menu-item" style={{ textDecoration: 'none' }} to="/login">Login</NavLink> <NavLink className="top-menu menu-item" style={{ textDecoration: 'none' }} to="/signup">Register</NavLink> </Nav.Link>

                                }
                            </div>
                        </div>
                    </div>
                    <Navbar className='Nav-bg ' expand="lg">
                        <Container className='container'>
                            <Navbar.Brand className='navbar-style'><Link style={{ textDecoration: 'none' }} to="/"><img style={{ width: "170px" }} src={logo} alt="" /></Link></Navbar.Brand>
                            <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto navbar-style p-0 align-items-center">

                                    <Nav.Link ><NavLink className="menu-item" style={{ textDecoration: 'none' }} to="/">Home</NavLink> </Nav.Link>
                                    <Nav.Link ><NavLink className="menu-item" style={{ textDecoration: 'none' }} to="/blogs">Blogs</NavLink> </Nav.Link>



                                    {
                                        user && <Nav.Link ><NavLink className="menu-item" style={{ textDecoration: 'none' }} to="/manage-inventories">Manage Items</NavLink> </Nav.Link>
                                    }
                                    {
                                        user && <Nav.Link ><NavLink className="menu-item" style={{ textDecoration: 'none' }} to="/add-inventory-item">Add Item</NavLink> </Nav.Link>
                                    }
                                    {
                                        user && <Nav.Link ><NavLink className="menu-item" style={{ textDecoration: 'none' }} to="/my-items">My Items</NavLink> </Nav.Link>
                                    }


                                </Nav>
                                <div className='phone'>
                                    <FontAwesomeIcon className='phone-icon' icon={faPhone}></FontAwesomeIcon>
                                    <p>+8801789181646</p>
                                </div>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </div>
            </div>

        </div >

    );
};

export default Header;