import { getBreakingBadData } from '../../redux/homeRedux';
import { connect } from 'react-redux';
import BreakingBadHome from './BreakingBadHome';

const mapStateToProps = state => ({
  characters: getBreakingBadData(state),
})

export default connect(mapStateToProps)(BreakingBadHome);