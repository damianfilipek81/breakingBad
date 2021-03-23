import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharacterCard.scss';

const CharacterCardDropdown = ({ birthday, status, occupation }) => {
  return (
    <div className={styles.description}>
      <p>
        Birthday: {birthday} <br />
        Status: {status} <br />
        Occupation: {occupation.map(occ => (
          occ +' '
        ))}
      </p>
    </div>
  )
}

CharacterCardDropdown.propTypes = {
  birthday: PropTypes.string,
  status: PropTypes.string,
  occupation: PropTypes.array,
}

export default CharacterCardDropdown;