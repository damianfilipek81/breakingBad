import { connect } from 'react-redux';
import CharacterCard from './CharacterCard';
import { addFavoriteCharacter, removeFavoriteCharacter } from '../../redux/favoritesRedux';

const mapDispatchToProps = dispatch => ({
  addFavoriteCharacter: payload => dispatch(addFavoriteCharacter(payload)),
  removeFavoriteCharacter: payload => dispatch(removeFavoriteCharacter(payload)),
});

export default connect(null, mapDispatchToProps)(CharacterCard);