import React, { useState } from 'react';
import styles from './CharacterCard.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '../Icon/Icon';
import CharacterCardDropdown from './CharacterCardDropdown';

const CharacterCard = ({ name, img, nickname, birthday, status, occupation }) => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <Card className={isActive ? styles.component : styles.activeComponent}>
      <CardActionArea onClick={handleToggle}>
        <div className={styles.imageWrapper}>
          <CardMedia
            className={styles.image}
            image={img}
            title={settings.alt}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={styles.title}>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {nickname}
          </Typography>
          <div className={isActive ? styles.dropdown : styles.activeDropdown}>
            <CharacterCardDropdown
              birthday={birthday}
              status={status}
              occupation={occupation} />
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button><Icon name={settings.heartIcon}></Icon></Button>
        <Button><Icon name={settings.shareIcon}></Icon></Button>
      </CardActions>
    </Card>
  )
}

CharacterCard.propTypes = {
  name: PropTypes.string,
  nickname: PropTypes.string,
  img: PropTypes.string,
  birthday: PropTypes.string,
  status: PropTypes.string,
  occupation: PropTypes.array,
}

export default CharacterCard;