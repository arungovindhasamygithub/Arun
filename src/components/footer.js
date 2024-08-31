import React from "react";
import { Link } from "react-router-dom";
import logoLight from '../assets/images/logo-light.png'

export default function Footer(){
    return(
        <>
        <footer className="footer bg-blue">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                        <Link to="#"><img src={logoLight} alt=""/></Link>
                        <p className="para-desc mx-auto mt-5">Obviously I'm a Web Developer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                        <ul className="list-unstyled mb-0 mt-4 social-icon">
                        <li className="list-inline-item"><Link to="https://github.com/arungovindhasamygithub"><i className="mdi mdi-github"></i></Link></li>
                            
                            <li className="list-inline-item"><Link to="https://www.linkedin.com/in/arun-g-8422a3240/"><i className="mdi mdi-linkedin"></i></Link></li>
                            <li className="list-inline-item"><Link to="https://www.facebook.com/profile.php?id=100014230454192"><i className="mdi mdi-facebook"></i></Link></li>
                         
                            <li className="list-inline-item"><Link to="https://www.instagram.com/arun_g_it/"><i className="mdi mdi-instagram"></i></Link></li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <footer className="footer footer-bar bg-blue wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
            <div className="container text-foot text-center">
                <p className="mb-0">© {new Date().getFullYear()} Arun. Design & Develop with <i className="mdi mdi-heart text-danger"></i> <Link to="" target="_blank" className="text-reset">ReactJS</Link>.</p>
            </div>
        </footer>
        </>
    )
}