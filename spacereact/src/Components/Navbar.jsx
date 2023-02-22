import React from "react";
import ("./Navbar.css")

function Navbar() {
    return (

            <div className="navbar">

                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>   
                </div>

                <div className="navLinks">
                    <ul className="navItems">
                        <li className="home"><span className="num">00</span>HOME</li>
                        <li className="home"><span className="num">01</span>DESTINATION</li>
                        <li className="home"><span className="num">02</span>CREW</li>
                        <li className="home"><span className="num">03</span>TECHNOLOGY</li>
                    </ul>
                </div>
            </div>

    )

}
export default Navbar;