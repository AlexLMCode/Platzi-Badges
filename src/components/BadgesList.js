import React from 'react';
import './styles/BadgesList.css';
import twitter from "../images/twitter.jpg"
import {Link} from "react-router-dom";


function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredResults] = React.useState(badges)

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase().includes(query.toLowerCase());
        });
        setFilteredResults(result)
    }, [badges, query])

    return {query, setQuery, filteredBadges};

}

function BadgesList(props) {

    const badges = props.badges;

    const {query, setQuery, filteredBadges} = useSearchBadges(badges);

    if (filteredBadges.length === 0) {
        return (
            <div className="container">
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text"
                           className="form-control"
                           value={query}
                           onChange={(e) => {
                               setQuery(e.target.value)
                           }}
                    />
                </div>
                <h3>No badges where found</h3>
                <Link to="/badges/new" className="btn btn-primary">
                    Create a new Badge
                </Link>
            </div>
        )
    }

    return (
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text"
                       className="form-control"
                       value={query}
                       onChange={(e) => {
                           setQuery(e.target.value)
                       }}
                />
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map((badge) => {
                    return (
                        <li key={badge.id} className="Badge__item shadow-sm p-3 mb-5 bg-white rounded">
                            <img src={badge.avatarUrl || "https://www.gravatar.com/avatar?d=identicon"} alt=""
                                 className="Badge__image"/>
                            <div className="Badge__info">
                                <span className="Badge__name">{badge.firstName} {badge.lastName}</span>
                                <a href={"https://twitter.com/" + badge.twitter}>
                                    <img src={twitter} alt="imagen de twitter" className="twitter-logo"/>
                                    @{badge.twitter}
                                </a>
                                <span className="Badge__ocupation">{badge.jobTitle}</span>
                                <Link to={`/badges/${badge.id}`} className="btn">Editar</Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );

}

export default BadgesList