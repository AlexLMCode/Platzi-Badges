import React from 'react';
import logo from '../images/Group 47.svg'
import './styles/navbar.css'
import {Link} from "react-router-dom";
class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link to="/" className="Navbar__brand">
                        <img src={logo} className="Navbar__brand-logo" alt="logo of the conference"/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>

        )
    }
}

export default Navbar;