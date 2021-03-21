import { getAllData } from '../../redux/headerRedux';
import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
  data: getAllData(state),
})

export default connect(mapStateToProps)(Header);