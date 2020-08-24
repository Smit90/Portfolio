import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <NavLink id="navbar-brand" className="navbar-brand" to="/">PS Tech</NavLink>
                            <button className="navbar-toggler" 
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" 
                                    aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink exact activeClassName="menu_active" className="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName="menu_active" className="nav-link" to="/service">Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        {/* <nav class="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        </ul>
    </div>
  </div>
</nav> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;