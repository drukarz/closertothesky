import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component
{
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <nav id="navbar">
                <div >
                    <ul >
                        <li className="nav-item">
                            <Link className="nav-item-back"
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-item-back"
                                activeClass="active"
                                to="section2"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-item-back"
                                activeClass="active"
                                to="section3"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-item-back"
                                activeClass="active"
                                to="section4"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-item-back"
                                activeClass="active"
                                to="section5"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-item-back"
                                activeClass="active"
                                to="section6"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;