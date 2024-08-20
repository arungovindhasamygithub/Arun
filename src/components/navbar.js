import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as Link1 } from "react-scroll";

import logo from '../assets/images/logo.png'
import logoLight from '../assets/images/logo-light.png'

import { FiMenu } from '../assets/icons/vander'

export default function Navbar({navClass, socialClass, navDark}){
    let [ navSticky, setNavSticky ] = useState(false)
    let [ dropdown, setDropdown ] = useState(false)
    let [ toggleManu, setToggleManu] = useState(false)
    let [ manu, setManu] = useState('')

    let location = useLocation()

    useEffect(()=>{
        let current = location.pathname
        setManu(current)

        const scrollHandlar = () =>{
            setNavSticky(window.scrollY > 50)
        }
        const closeDropdown = () =>{
            setDropdown(false)
        }

        window.scrollTo(0, 0);

       window.addEventListener('scroll',scrollHandlar)
       document.addEventListener('mousedown', closeDropdown)
       return()=>{
            window.removeEventListener('scroll',scrollHandlar)
            document.removeEventListener('mousedown', closeDropdown)
       }
    },[location.pathname])
    return(
        <nav id="navbar" className={`${navSticky ? 'nav-sticky' : ''} navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky`}>
    		<div className="container">
                {navDark ? 
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className="logo-light-mode" alt=""/>
                        <img src={logoLight} className="logo-dark-mode" alt=""/>
                    </Link> :
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className="l-dark" alt=""/>
                        <img src={logoLight} className="l-light" alt=""/>
                    </Link>
                }
                <button className="navbar-toggler" type="button" onClick={() =>setToggleManu(!toggleManu)}>
                    <FiMenu className="fea icon-md"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse" style={{display: toggleManu ?'block' : 'none'}}>
                    <ul id="navbar-navlist" className={navClass}>
                        <li className="nav-item">
                            <Link1 className="nav-link" activeClass="active"  spy={true} smooth={true} duration={500} to={'home' || 'about'}>Home</Link1>
                        </li>
                        <li className="nav-item">
                            <Link1 className="nav-link" activeClass="active"  spy={true} smooth={true} duration={500} to="services">Services</Link1>
                        </li>
                        <li className="nav-item">
                            <Link1 className="nav-link" activeClass="active"  spy={true} smooth={true} duration={500} to="resume">Resume</Link1>
                        </li>
                        <li className="nav-item">
                            <Link1 className="nav-link" activeClass="active"  spy={true} smooth={true} duration={500} to="projects">Projects</Link1>
                        </li>
                        {/* <li className="nav-item">
                            <Link1 className="nav-link" activeClass="active"  spy={true} smooth={true} duration={500} to="news">Blog</Link1>
                        </li> */}
                        <li className="nav-item">
                            <Link1 className="nav-link" activeClass="active"  spy={true} smooth={true} duration={500} to="contact">Contact</Link1>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <Link className={`${['/page-blog', "/page-blog-detail", "/page-portfolio", "/page-portfolio-detail"].includes(manu) ? 'active' : ''} nav-link dropdown-toggle`} to="#" onClick={()=>setDropdown(true)}>Pages</Link>
                            <div className={`${dropdown ? 'show' : ''} dropdown-menu rounded m-0`}>
                                <div className="container mx-0 mx-md-0">
                                    <div className="row">
                                        <div className="col-md-12">

                                            <Link className={`${manu === '/page-blog' ? 'active-item' : ''} dropdown-item`} to="/page-blog">Blog</Link>
                                            <Link className={`${manu === '/page-blog-detail' ? 'active-item' : ''} dropdown-item`} to="/page-blog-detail">Blog Detail</Link>
                                            <Link className={`${manu === '/page-portfolio' ? 'active-item' : ''} dropdown-item`} to="/page-portfolio">Portfolio</Link>
                                            <Link className={`${manu === '/page-portfolio-detail' ? 'active-item' : ''} dropdown-item`} to="/page-portfolio-detail">Portfolio Detail</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> */}
                    </ul>

                    <ul className={socialClass}>
                    <li className="list-inline-item"><Link to="https://github.com/arungovindhasamygithub"><i className="mdi mdi-github"></i></Link></li>
                            
                            <li className="list-inline-item"><Link to="https://www.linkedin.com/in/arun-g-8422a3240/"><i className="mdi mdi-linkedin"></i></Link></li>
                            <li className="list-inline-item"><Link to="https://www.facebook.com/profile.php?id=100014230454192"><i className="mdi mdi-facebook"></i></Link></li>
                         
                            <li className="list-inline-item"><Link to="https://www.instagram.com/arun_g_it/"><i className="mdi mdi-instagram"></i></Link></li>
                        
                    </ul>
                </div> 
            </div>
		</nav>
    )
}