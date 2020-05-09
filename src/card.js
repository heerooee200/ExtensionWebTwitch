import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import Formulario from './channelForm';
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#7A04DD',
      },
    },
});
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#737271",
    textAlign: "left",
    fontFamily: "Roboto Mono,monospace",
    color: "#F2F1F0"
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/aV6MyXx.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Combo Emotes
          </Typography>
          <Typography variant="body2" component="p">
            Genera un combo en pantalla cuando se espamea un emoji en pantalla
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Formulario/>
       
        
      </CardActions>
    </Card>
  );
}