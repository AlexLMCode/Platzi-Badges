import React from 'react';
import confLogo from '../images/Group 69.svg';
import "./styles/Badge.css";

//Components are clases this is why a component is an object of React.Component
class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de conferencia"/>
                </div>
                <div className="Badge__section-name">
                    <img
                        className="Badge__avatar"
                        src="https://www.gravatar.com/avatar?d=identicon"
                        alt="Avatar"
                    />
                    <h1>{this.props.firstName}<br/> {this.props.lastName}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <footer className="Badge__footer">
                    #PlatziConf
                </footer>
            </div>
        )
    }
}

export default Badge;