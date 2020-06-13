import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <a className="navbar-brand" href="#">LOGO</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="posts">Posts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;