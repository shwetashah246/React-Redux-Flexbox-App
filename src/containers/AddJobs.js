import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddJob } from '../actions'

class AddJobs extends Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.initialState = {
            name: '',
            role: '',
            technology: '',
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(event.target.name.value ==='' || event.target.role.value === '') return;
        this.props.createJob(this.state.name,this.state.role,this.state.technology);
        this.setState(this.initialState);
    }

    render() {
        const { name, role, technology } = this.state; 

        return (
            <div className="section form center-row">
                <h3>Add New Job</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-item">
                        <label>Company Name</label>
                        <input type="text" placeholder="Enter Company Name" name="name" value={name} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-item">
                        <label>Job Role</label>
                        <select name="role" onChange={this.handleChange} value={role}>
                            <option value="">Select Role</option>
                            <option value="Full Stack Developer">Full Stack Developer</option>
                            <option value="Software Developer">Software Developer</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <label>Technology</label>
                        <textarea name="technology" value={technology} onChange={this.handleChange} placeholder="Enter technologies.." />
                    </div>
                    <div className="center-row">
                        <button type="submit" className="btn btn-primary">Save </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.name,
        role: state.role,
        technology: state.technology
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createJob: (name,role,technology) => dispatch(AddJob(name,role,technology)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddJobs)