import React from 'react';
import {Link} from "react-router-dom";
import estrellas from '../images/estrellas.svg';
import logo from '../images/logo conf.svg';
import astronautas from '../images/astronautas.svg';
import './styles/Home.css'

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <main className="main" style={{backgroundImage: `url(${estrellas})`}}>
                    <section className="main__container">
                        <div className="main__image">
                            <img src={astronautas} alt="imagen de astronautas"/>
                        </div>
                        <div className="main__info">
                            <figure>
                                <img src={logo} alt="logo de plat<i conf"/>
                            </figure>
                            <div className="main__description">
                                <h1>print your badges</h1>
                                <p>The easiest way to manage your <br/> conference</p>
                            </div>
                            <Link to="/badges" className="btn btn-primary">Start now</Link>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

export default Home;