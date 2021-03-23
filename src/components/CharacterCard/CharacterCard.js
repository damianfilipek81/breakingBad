import React from 'react';
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

const CharacterCard = ({ name, img, nickname }) => (
  // <div className={styles.component}>
  //   {name}
  //   <div className={styles.imageWrapper}>
  //     <img src={img} alt={settings.alt} className={styles.image}></img>
  //   </div>
  // </div>
  <Card className={styles.component}>
    <CardActionArea>
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
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
    </Button>
    </CardActions>
  </Card>
)

CharacterCard.propTypes = {
  name: PropTypes.string,
  nickname: PropTypes.string,
  img: PropTypes.string,
}

export default CharacterCard;