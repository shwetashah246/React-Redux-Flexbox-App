const jobs = (
    state = [{
                id: 1,
                name: "Demo Company",
                role: "Frontend Developer",
                technology: "React.js, Redux, Flexbox",
                rejected: false
            }], 
    action) => {
        switch (action.type) {
            case 'ADD_JOB':
                return [
                    ...state,
                    {
                        id: action.id,
                        name: action.name,
                        role: action.role,
                        technology: action.technology,
                        rejected: false
                    }
                ]

            case 'TOGGLE_JOB':
                return state.map(job => (job.id === action.id) ? {...job, rejected: !job.rejected} : job)

            case 'DELETE_JOB':
                return state.filter((job) => job.id !== action.id)

            default:
                return state
    }
}

export default jobs
