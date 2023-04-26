import React from "react";
import "../styles/tailwind.css";
import { Link } from "react-router-dom";
import image from "../../public/owl.svg"

const NavBar = () => {
    return(
    <div className="navbar bg-base-100 shadow rounded-lg ">
        <div><img  className="w-12 h-12 mx-auto" src={image} alt="wise_owl" /></div>
        <div className="flex-1">
            <Link to={'/'} className="btn btn-ghost normal-case text-4xl active:bg-primary-focus">MatchWise</Link>
        </div>
        <div className="flex-none ">
            <ul className="menu menu-horizontal px-1 text-2xl">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            </ul>
        </div>
    </div>
    )
}

export default NavBar