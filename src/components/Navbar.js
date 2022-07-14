
import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar () {

    return (
        <>
            <nav className="navbar fixed-top navbar-dark navbar-expand-lg bg-dark">
                {/* <nav className="navbar navbar-expand-lg bg-light"> */}
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/general">News-24</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/News-app">Home</Link>
                            </li>

                            <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/business">Business</Link></li>
                            <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/general">General</Link></li>
                            <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/health"> Health </Link></li>
                            <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/science"> Science </Link></li>
                            <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/sports"> Sports </Link></li>
                            <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/technology"> Technology</Link></li>

                            {/* //Must use "to" while using "Link" */}

                            <li className="nav-item"> <Link className="nav-link" to="/about">About Us</Link></li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* </nav> */}
        </>
    )

}
