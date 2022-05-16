import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {PostCard} from './Styled';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CommentsCard = (props) => {
  const classes = useStyles();

  return (
    <PostCard className={classes.root}>
      <CardActionArea onClick={props.onClick}>
        <CardContent>
          <Typography 
          variant="body2" 
          color="textSecondary" 
          component="p">
            Enviado por: {props.username}
          </Typography>
          <Typography 
          gutterBottom 
          variant="h5" 
          component="h5">
            {props.title}
          </Typography>
          <Typography 
          variant="body2" 
          color="textSecondary" 
          component="p">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
        size="small" 
        color="primary"
        onClick={props.like}>
          <ThumbUpAltOutlinedIcon/>
        </Button>
        <Button 
        size="small" 
        color="primary"
        onClick={props.dislike}>
          <ThumbDownAltOutlinedIcon/>
        </Button>
        <Button 
        size="small" 
        color="primary">
          <>{props.numeroComentarios}</>
          <ChatBubbleOutlineOutlinedIcon/>
        </Button>
      </CardActions>
    </PostCard>
  );
}

export default CommentsCard