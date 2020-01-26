import React from 'react';

import Badge from '../Badge/Badge';
import BadgeForm from '../BadgeForm/BadgeForm';

import header from '../../img/badge-header.svg';

import './styles.css';

class BadgeNew extends React.Component{

    state = { 
        form: {
            firstName: '',
            lastName: '',
            twitter: '',
            email: '',
            jobTitle: ''
        } 
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
 
    render(){
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img src={header} alt="" className="image-fluid"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                {...this.state.form}
                                avatarUrl="https://secure.gravatar.com/avatar/11da7bec247f8bd5c9dbe3cd000c48ce"
                            />
                        </div>
                        <div className="col">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default BadgeNew;