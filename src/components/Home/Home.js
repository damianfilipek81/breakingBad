import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';
import Container from '../Container/Container';
import CharacterCard from '../CharacterCard/CharacterCard';

const Home = ({ characters }) => (
  <main className={styles.component} >
    <Container>
      <h1 className={styles.title}>Breaking Bad's characters</h1>
      <div className={styles.wrapper}>
        {characters.map(data => (
          <CharacterCard key={data.char_id} {...data}></CharacterCard>
        ))}
      </div>
    </Container>
  </main>
)

Home.propTypes = {
  characters: PropTypes.array,
}

export default Home;