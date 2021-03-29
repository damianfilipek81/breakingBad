import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';
import Container from '../Container/Container';
import CharacterCard from '../CharacterCard/CharacterCardContainer';

const Home = ({ characters, title }) => {
  const [isEqual, setIsEqual] = useState(0)
  const myRef = useRef(null);

  const randomDeath = () => {
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    return randomCharacter;
  }

  const handleRandomDeath = () => {
    const number = randomDeath();
    setIsEqual(number);
    setTimeout(() => executeScroll(), 100)

  }
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: "smooth", block: "center" })

  return (
    <main className={styles.component} >
      <Container>
        <button onClick={handleRandomDeath}>Random death</button>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.wrapper}>
          {characters.map(data => (
            <CharacterCard classProps={isEqual.name == data.name ? true : false} childRef={isEqual.char_id == data.char_id ? myRef : null} key={data.char_id} {...data}></CharacterCard>
          ))}
        </div>
      </Container>
    </main>
  )
}

Home.propTypes = {
  characters: PropTypes.array,
  title: PropTypes.string,
}



export default Home;