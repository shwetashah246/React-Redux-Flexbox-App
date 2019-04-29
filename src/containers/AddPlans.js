import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddPlan } from '../actions'

class AddPlans extends Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.initialState = {
            task: '',
            category: ''
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
        if(event.target.name.value === '' || event.target.category.value === '') return;
        this.props.createPlan(this.state.task,this.state.category);
        this.setState(this.initialState);
    }

    render() {
        const { task, category } = this.state; 

        return (
            <div className="section form center-row">
                <h3>Add New Plan</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-item">
                        <label>Plan</label>
                        <input type="text" name="task" value={task} placeholder="Enter your task" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-item">
                        <label>Category</label>
                        <select name="category" onChange={this.handleChange} value={category}>
                            <option value="">Select Category</option>
                            <option value="Health">Health</option>
                            <option value="Learning">Learning</option>
                            <option value="Office">Office</option>
                            <option value="Home">Home</option>
                        </select>
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
        task: state.task,
        category: state.category
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createPlan: (task,category) => dispatch(AddPlan(task,category)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlans)