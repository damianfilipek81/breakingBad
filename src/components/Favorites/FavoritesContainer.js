
import { connect } from 'react-redux';
import Favorites from './Favorites.js';
import { getData } from '../../redux/favoritesRedux';


const mapStateToProps = state => ({
  characters: getData(state),
  dsa: console.log(state)
});

export default connect(mapStateToProps)(Favorites);