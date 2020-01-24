import React from 'react';

class BadgeForm extends React.Component{

    state = {}

    handleClick = (e) => {
        console.log('Button was clicked!');
    }

    handleSubmit= (e) => {
        e.preventDefault();
        console.log('Form was submitted!');
        console.log(this.props.formValues);
    }

    render(){
        return (
            <div>
                <h1>New attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            className="form-control" 
                            onChange={this.props.onChange} 
                            value={this.props.formValues.firstName} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            className="form-control" 
                            onChange={this.props.onChange} 
                            value={this.props.formValues.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="form-control" 
                            onChange={this.props.onChange} 
                            value={this.props.formValues.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job Title</label>
                        <input 
                            type="text" 
                            name="jobTitle" 
                            className="form-control" 
                            onChange={this.props.onChange} 
                            value={this.props.formValues.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input 
                            type="text" 
                            name="twitter" 
                            className="form-control" 
                            onChange={this.props.onChange} 
                            value={this.props.formValues.twitter}    
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;