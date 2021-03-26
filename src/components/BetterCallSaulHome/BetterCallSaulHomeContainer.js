import { getBetterCallSaulData } from '../../redux/homeRedux';
import { connect } from 'react-redux';
import BetterCallSaulHome from './BetterCallSaulHome';

const mapStateToProps = state => ({
  characters: getBetterCallSaulData(state),
})

export default connect(mapStateToProps)(BetterCallSaulHome);