import React from "react";
import BadgesList from "../components/BadgesList";
import {Link} from "react-router-dom";

import './styles/Badges.css';
import logo from '../../src/images/Group 69.svg'
import star from "../images/estrellas.svg";


class Badges extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        console.log('1.- constructor')
    }

    componentDidMount() {
        console.log("3.- component mount");

        this.timeOutId = setTimeout(() => {
            this.setState({
                data: [
                    {
                        "id": "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                        "firstName": "Freda",
                        "lastName": "Grady",
                        "email": "Leann_Berge@gmail.com",
                        "jobTitle": "Legacy Brand Director",
                        "twitter": "FredaGrady22221-7573",
                        "avatarUrl": "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                    },
                    {
                        "id": "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                        "firstName": "Major",
                        "lastName": "Rodriguez",
                        "email": "Ilene66@hotmail.com",
                        "jobTitle": "Human Research Architect",
                        "twitter": "MajorRodriguez61545",
                        "avatarUrl": "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                    },
                    {
                        "id": "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                        "firstName": "Daphney",
                        "lastName": "Torphy",
                        "email": "Ron61@hotmail.com",
                        "jobTitle": "National Markets Officer",
                        "twitter": "DaphneyTorphy96105",
                        "avatarUrl": "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                    },
                    {
                        "id": "a9748581-dfdc-4a78-930d-5205a2ccef48",
                        "firstName": "Tatyana",
                        "lastName": "Von",
                        "email": "Herminio.Schmeler@hotmail.com",
                        "jobTitle": "Central Branding Representative",
                        "twitter": "TatyanaVon35871-3686",
                        "avatarUrl": "https://www.gravatar.com/avatar/98c382edd93414c1649b9db866000f97?d=identicon"
                    }
                ]
            })
        }, 3000);


    }

    componentDidUpdate(prevProps, prevState) {
        console.log("5.- component did update");

        console.log({
            prevProps: prevProps, prevState: prevState
        })

        console.log({
            props: this.props,
            state: this.state
        })
    }

    componentWillUnmount() {
        console.log("6.- component will unmount");
        //Con esto liberamos el componente, que se desmonto antes de que se acabara su timeout
        clearTimeout(this.timeOutId);
    }

    render() {
        console.log("2/4.-render")
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero" style={{backgroundImage: `url(${star})`}}>
                        <div className="Badges__container">
                            <img src={logo} alt="Conf logo" className="Badges_conf-logo"/>
                        </div>
                    </div>
                </div>
                <div className="Badge__container">
                    <div className="Badge__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges;