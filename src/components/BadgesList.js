import React from 'react';
import './styles/BadgesList.css';
import twitter from "../images/twitter.jpg"

class BadgesList extends React.Component{
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map((badge)=>{
                    return (
                        <li key={badge.id} className="Badge__item shadow-sm p-3 mb-5 bg-white rounded">
                            <img src={badge.avatarUrl} alt="" className="Badge__image"/>
                            <div className="Badge__info">
                                <span className="Badge__name">{badge.firstName} {badge.lastName}</span>
                                <a href={"https://twitter.com/"+ badge.twitter}>
                                    <img src={twitter} alt="imagen de twitter" className="twitter-logo"/>
                                    @{badge.twitter}
                                </a>
                                <span className="Badge__ocupation">{badge.jobTitle}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default BadgesList