import { getBreakingBadData } from '../../redux/homeRedux';
import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = state => ({
  characters: getBreakingBadData(state),
})

export default connect(mapStateToProps)(Home);