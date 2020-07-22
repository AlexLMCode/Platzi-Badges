import React from 'react';

import Navbar from '../components/Navbar';
import logo from '../images/Group 69.svg';
import star from '../images/estrellas.svg';
import './styles/BadgeNew.css'
import Badge from "../components/batch";
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {

    state = {
        form: {
            firtsName: '',
            lastName: '',
            jobTitle: '',
            email: '',
            twitter: ''
        }
    }

    handleChange = e => {

        this.setState({
            form: {
                /*Aqui le pasamos todos los valores que tenia antes y despues le añadimos el nuevo valor*/
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="BadgeNew__hero" style={{backgroundImage: `url(${star})`}}>
                    <img src={logo} alt="Logo" className="img-fluid"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firtsName={this.state.form.firtsName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;