import React from 'react';

import Logo from '../../img/badge-header.svg';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../global.css';

class Badge extends React.Component{

    render(){
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={Logo} alt="Logo de la conferencia"/>
                </div>

                <div className="Badge__section-name">
                    <img className="Badge__avatar"
                         src="https://secure.gravatar.com/avatar/11da7bec247f8bd5c9dbe3cd000c48ce" 
                         alt="Avatar"/>
                    <h1>Agustín <br/>Zamar</h1>
                </div>
                <div className="Badge__section-info">
                    <p>Full Stack Developer</p>
                    <div>@_agustinzamar</div>
                </div>
                <div className="Badge__footer">
                    #platziconf
                </div>
            </div>
        );
    }

}

export default Badge;