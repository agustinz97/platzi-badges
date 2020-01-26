import React from 'react';
import {Link} from 'react-router-dom';

import BadgesList from '../BadgesList/BadgesList';
import api from '../../api';
import PageLoading from '../PageLoading/PageLoading';
import PageError from '../PageError/PageError';

import confLogo from '../../img/badge-header.svg';

import './styles.css';

class Badges extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            data: undefined,
            loading: true,
            error: null
        };
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try{

            const data = await api.badges.list();
            
            this.setState({ loading: false, data: data });

        } catch(error){
            this.setState({ loading:false, error: error });
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState){

    }

    componentWillUnmount(){

    }

    render(){

        if(this.state.loading === true){
            return <PageLoading/>;
        }

        if(this.state.error){
            return <PageError error={this.state.error} />;
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={confLogo} alt="Conf logo" className="Badge__conf-logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New badge</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;