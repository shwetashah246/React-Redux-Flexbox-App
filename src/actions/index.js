let nextTodoId = 0, nextPlanId = 2, nextJobId = 2

/*---- Start - Plan---------------*/
export const AddPlan = (task,category) => ({
    type: 'ADD_PLAN',
    id: nextPlanId++,
    task,
    category
})

export const deletePlan = (id) => {
    return {
        type: 'DELETE_PLAN',
        id
    }
}

export const togglePlan = id => ({
    type: 'TOGGLE_PLAN',
    id
})

/*---- END - Plan---------------*/

/*---- Start - JOB---------------*/
export const AddJob = (name,role,technology) => ({
    type: 'ADD_JOB',
    id: nextJobId++,
    name,
    role,
    technology,
})

export const deleteJob = (id) => {
    return {
        type: 'DELETE_JOB',
        id
    }
}

export const toggleJob = id => ({
    type: 'TOGGLE_JOB',
    id
})

/*---- END - JOB---------------*/

/*---- Start - To-Do---------------*/

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
/*---- End - To-Do---------------*/