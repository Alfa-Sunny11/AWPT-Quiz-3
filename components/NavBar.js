import React from 'react';
import {Link} from 'react-router-dom';


export const NavBar = () => {
      
      return (
            <div>
                  {/* <!-- ======= Header ======= --> */}
                  <header id="header" className="fixed-top header-transparent">
                        <div className="container d-flex align-items-center justify-content-between">

                              <h1 className="logo"><a href="/">Baker</a></h1>
                              {/* <!-- Uncomment below if you prefer to use an image logo -->
                              <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

                              <nav id="navbar" className="navbar">
                              <ul>
                              <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
                              <li><Link className="nav-link scrollto" to="/about">About</Link></li>
                              <li><Link className="nav-link scrollto" to="/services">Services</Link></li>
                              <li><Link className="nav-link scrollto " to="/portfolio">Portfolio</Link></li>
                              <li><Link className="nav-link scrollto" to="/team">Team</Link></li>
                              <li><Link className="nav-link scrollto" to="/pricing">Pricing</Link></li>
                              <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                                    <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                          <li><a href="#">Deep Drop Down 1</a></li>
                                          <li><a href="#">Deep Drop Down 2</a></li>
                                          <li><a href="#">Deep Drop Down 3</a></li>
                                          <li><a href="#">Deep Drop Down 4</a></li>
                                          <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                    </ul>
                              </li>
                              <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>
                              </ul>
                              <i className="bi bi-list mobile-nav-toggle"></i>
                              </nav>

                        </div>
                  </header>
                  {/* <!-- End Header --> */}

                  
            </div>
      )
}

export default NavBar;
