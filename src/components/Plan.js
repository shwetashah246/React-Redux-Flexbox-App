import React from 'react'
import PropTypes from 'prop-types'

const Plan = ({ togglePlan, deletePlan, completed, id, task, category }) => (
    <tr key={id}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
        >
        <td><span>ID : </span>{id}</td>
        <td><span>Task : </span>{task}</td>
        <td><span>Category : </span>{category}</td>
        <td><span>Status : </span><button className="btn btn-info" onClick={(e) => togglePlan(e, id)}>{completed ? 'Completed' : 'In-Complete'}</button></td>
        <td><span>Delete : </span><button className="btn btn-danger" onClick={(e) => deletePlan(e, id)}>Delete</button></td>
    </tr>
)

Plan.propTypes = {
    togglePlan: PropTypes.func.isRequired,
    deletePlan: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    task: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}

export default Plan
