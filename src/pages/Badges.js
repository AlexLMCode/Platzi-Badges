import React from "react";
import BadgesList from "../components/BadgesList";
import {Link} from "react-router-dom";
import api from "../api";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import './styles/Badges.css';
import logo from '../../src/images/Group 69.svg'
import star from "../images/estrellas.svg";
import MiniLoader from "../components/MiniLoader";


class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null,
        })

        try {
            const data = await api.badges.list();
            this.setState({
                data: data,
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false,
                error: error,
            })
        }
    }

    componentDidMount() {
        this.fetchData();

        this.intervalID = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {

        if (this.state.loading === true && this.state.data === undefined) {
            return <PageLoading/>
        }

        if (this.state.error) {
            return <PageError error={this.state.error}/>
        }

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
                    {this.state.loading ? <MiniLoader/> : 'Not loading'}
                </div>
            </React.Fragment>
        )
    }
}

export default Badges;