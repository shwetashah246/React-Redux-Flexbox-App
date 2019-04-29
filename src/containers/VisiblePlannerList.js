import { connect } from 'react-redux'
// import { togglePlan } from '../actions'
import * as appActions from '../actions'
import PlannerList from '../components/PlannerList'

const mapStateToProps = state => ({
    plans: state.plans
})

const mapDispatchToProps = dispatch => ({
    togglePlan: id => dispatch(appActions.togglePlan(id)),
    deletePlan: id => dispatch(appActions.deletePlan(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlannerList)
