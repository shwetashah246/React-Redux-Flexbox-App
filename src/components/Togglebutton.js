import React, {Component} from 'react';

// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'
// import Footer from './Footer'

import AddPlans from '../containers/AddPlans'
import VisiblePlannerList from '../containers/VisiblePlannerList'

import AddJobs from '../containers/AddJobs'
import VisibleJobList from '../containers/VisibleJobList'

class Togglebutton extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true}; //initialised isToggleOn to true

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
    }

    render() {
        var form,table, classStyle;
        if (this.state.isToggleOn) {
            classStyle = "btn-primary-1";
            table = <VisiblePlannerList />;
            form  = <AddPlans />;
        } else {
            classStyle = "btn-primary-2";
            table = <VisibleJobList />;
            form  = <AddJobs />;
        }
        return (
            <div>
                <div className="center-row">
                    <button onClick={this.handleClick} className={"mb-30 mb-sm-20 btn " + classStyle}>
                        {this.state.isToggleOn ? 'PLANNER' : 'COMPANY LIST'}
                    </button>
                </div>
                {form}
                {table}
            </div>
        );
    }
}

export default Togglebutton;
