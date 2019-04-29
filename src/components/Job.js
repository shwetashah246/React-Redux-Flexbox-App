import React from 'react'
import PropTypes from 'prop-types'

const Job = ({ toggleJob, deleteJob, rejected, id, name, role, technology }) => (
    <tr key={id}
        style={{
            textDecoration: rejected ? 'line-through' : 'none'
        }}
        >
        <td><span>ID : </span>{id}</td>
        <td><span>Company Name : </span>{name}</td>
        <td><span>Role : </span>{role}</td>
        <td><span>Technology : </span>{technology}</td>
        <td><span>Status : </span><button className="btn btn-info" onClick={(e) => toggleJob(e, id)}>{rejected ? 'Rejected' : 'Contacted - In Process'}</button></td>
        <td><span>Delete : </span><button className="btn btn-danger" onClick={(e) => deleteJob(e, id)}>Delete</button></td>
    </tr>
)

Job.propTypes = {
    toggleJob: PropTypes.func.isRequired,
    deleteJob: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    rejected: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired
}

export default Job
