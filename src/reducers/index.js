import { combineReducers } from 'redux'
import todos from './todos'
import plans from './plans'
import jobs from './jobs'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
	todos,
	plans,
	jobs,
	visibilityFilter
})
