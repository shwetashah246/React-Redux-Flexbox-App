import React from 'react'
import PropTypes from 'prop-types'
import Plan from './Plan'

const PlannerList = ({ plans, togglePlan, deletePlan }) => (
    <div className="section">
        <h2 className="">Plan List</h2>
        <table className="table mb-30 mb-sm-20">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Task</th>
                    <th scope="col">Category</th>
                    <th scope="col">Status</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {plans.map(plan =>
                    <Plan
                        key={plan.id}
                        {...plan}
                        togglePlan={() => togglePlan(plan.id)}
                        deletePlan={() => deletePlan(plan.id)}
                    />
                )}
            </tbody>
        </table>
    </div>
)

PlannerList.propTypes = {
    plans: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        task: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired
    }).isRequired).isRequired,
    togglePlan: PropTypes.func.isRequired,
    deletePlan: PropTypes.func.isRequired
}

export default PlannerList