import React from "react";
import "../styles/tailwind.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
    <div className="navbar bg-base-100 shadow rounded-lg ">
        <div className="flex-1">
            <Link to={'/'} className="btn btn-ghost normal-case text-xl ">MatchWise</Link>
        </div>
        <div className="flex-none ">
            <ul className="menu menu-horizontal px-1 text-xl">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            </ul>
        </div>
    </div>
    )
}

export default NavBar