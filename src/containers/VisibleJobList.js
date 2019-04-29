import { connect } from 'react-redux'
import * as appActions from '../actions'
import JobList from '../components/JobList'

const mapStateToProps = state => ({
    jobs: state.jobs
})

const mapDispatchToProps = dispatch => ({
    toggleJob: id => dispatch(appActions.toggleJob(id)),
    deleteJob: id => dispatch(appActions.deleteJob(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobList)
