import React from 'react';

import twitterLogo from '../../img/twitter-logo.png';

import './styles.css';

class BadgesList extends React.Component{

    render(){
        return(
            <ul className="list-unstyled">
                {
                    this.props.badges.map( (badge) => {
                        return(
                            <li key={badge.id} className="BadgesList__badge">
                                <div>
                                    <img src={badge.avatarUrl} alt="avatar" className="BadgesList__avatar"/>
                                </div>
                                <div className="BadgesList__badge-data">
                                    <span className="font-weight-bold">{badge.firstName} {badge.lastName}</span> <br/>
                                    <span className="BadgesList__badge-twitter">
                                        <img src={twitterLogo} alt="Logo de Twitter"/> 
                                        <a href={'https://twitter.com/'+badge.twitter}>@{badge.twitter}</a> <br/> 
                                    </span>
                                    <span>{badge.jobTitle}</span>
                                </div>
                            </li>
                        );
                    })
                }      
            </ul>
        );
    }

}

export default BadgesList;