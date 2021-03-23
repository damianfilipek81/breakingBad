import { getAllData } from '../../redux/homeRedux';
import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = state => ({
  characters: getAllData(state),
})

export default connect(mapStateToProps)(Home);