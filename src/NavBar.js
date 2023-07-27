import React from 'react'
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
const NavBar = () => {
  return (
    <>
        <nav class="navbar  navbar-expand ">
            <div class="container-fluid">
                <Link class="nav-link" to={"/"}>
                        <h3>Unacademy</h3>
                </Link>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link" to={"/"}>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/destination"}>
                            <span>Login</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/about"}>
                            <span>About</span>
                        </Link>
                    </li>
                    <div class="form-group mx-sm-3 mt-1 ">
                    <input type="text" class="form-control-file" placeholder="Search"/>
                    </div>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar