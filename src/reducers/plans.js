const plans = (
    state = [{
                id: 1,
                task: "Task 1",
                category: "Office",
                completed: false
            }], 
    action) => {
        switch (action.type) {
            case 'ADD_PLAN':
                return [
                    ...state,
                    {
                        id: action.id,
                        task: action.task,
                        category: action.category,
                        completed: false
                    }
                ]

            case 'TOGGLE_PLAN':
                return state.map(plan => (plan.id === action.id) ? {...plan, completed: !plan.completed} : plan)

            case 'DELETE_PLAN':
                return state.filter((plan) => plan.id !== action.id)

            default:
                return state
    }
}

export default plans
