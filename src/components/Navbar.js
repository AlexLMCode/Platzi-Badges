import React from 'react';
import logo from '../images/Group 69.svg'
import './styles/navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a href="/" className="Navbar__brand">
                        <img src={logo} className="Navbar__brand-logo" alt="logo of the conference"/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </a>
                </div>
            </div>

        )
    }
}

export default Navbar;