import React from 'react'
import PropTypes from 'prop-types'
import Job from './Job'

const JobList = ({ jobs, toggleJob, deleteJob }) => (
    <div className="section">
        <h2 className="">Job List</h2>
        <table className="table mb-30 mb-sm-20">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Role</th>
                    <th scope="col">Technology</th>
                    <th scope="col">Status</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {jobs.map(job =>
                    <Job
                        key={job.id}
                        {...job}
                        toggleJob={() => toggleJob(job.id)}
                        deleteJob={() => deleteJob(job.id)}
                    />
                )}
            </tbody>
        </table>
    </div>
)

JobList.propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        rejected: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        technology: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleJob: PropTypes.func.isRequired,
    deleteJob: PropTypes.func.isRequired
}

export default JobList