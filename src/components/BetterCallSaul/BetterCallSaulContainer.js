import { getBetterCallSaulData } from '../../redux/homeRedux';
import { connect } from 'react-redux';
import BetterCallSaul from './BetterCallSaul';

const mapStateToProps = state => ({
  characters: getBetterCallSaulData(state),
})

export default connect(mapStateToProps)(BetterCallSaul);