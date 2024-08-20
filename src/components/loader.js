import React from "react";
import logo from '../assets/images/logo.png'
export default function Loader(){
    return(
        <div id="preloader">
            <div id="status">
                <div className="logo">
                    <img src={logo} height="20" className="d-block mx-auto" alt=""/>
                </div>
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </div>
    )
}