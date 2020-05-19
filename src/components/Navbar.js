import React, { Component } from 'react'
import logo from '../assets/images/logo-final.png'
import '../assets/styles/navbar.scss'
import { Link } from 'react-scroll'

class Navbar extends Component {
    state = {
        ariaExpanded: true,
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light navbar-top">
                <div className="container">
                    <Link className="navbar-brand" to='home' smooth={true} spy={true}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse_target" aria-expanded={this.state.ariaExpanded}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapse_target">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='home' smooth={true} spy={true} data-toggle="collapse" data-target="#collapse_target">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='about' smooth={true} spy={true} data-toggle="collapse" data-target="#collapse_target">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='travel' smooth={true} spy={true} data-toggle="collapse" data-target="#collapse_target">TRAVEL</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='skills' smooth={true} spy={true} data-toggle="collapse" data-target="#collapse_target">SKILLS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='contact-me' smooth={true} spy={true} data-toggle="collapse" data-target="#collapse_target">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Navbar
