import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';
import Container from '../Container/Container';
import CharacterCard from '../CharacterCard/CharacterCardContainer';

const Home = ({ characters, title }) => (
  <main className={styles.component} >
    <Container>
      <h1 className={styles.title}>{title}</h1>
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
  title: PropTypes.string,
}

export default Home;