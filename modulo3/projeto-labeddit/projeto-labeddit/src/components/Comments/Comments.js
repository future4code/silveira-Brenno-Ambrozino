import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {PostCard} from './Styled'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Comments = (props) => {
  const classes = useStyles();

  const onClickLike = () => {
    if(props.userVote === null || props.userVote === -1){
      props.like()
    } else if(props.userVote === 1) {
      props.removeLike()
    }
  }

  const iconeLike = () => {
    if(props.userVote === 1) {
      return <ThumbUpAltIcon/>
    } else {
      return <ThumbUpAltOutlinedIcon/>
    }
  }
  

  const onClickDisLike = () => {
    if(props.userVote === null || props.userVote === 1 ){
      props.dislike()
    } else if (props.userVote === -1) {
      props.removeLike()
    }
  }

  const iconeDisLike = () => {
    if(props.userVote === -1) {
      return <ThumbDownAltIcon/>
    } else  {
      return <ThumbDownAltOutlinedIcon/>
    }
  }

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
        onClick={onClickLike}>
          {props.voteSum > 0 ? props.voteSum: ""}
          {iconeLike()}
        </Button>
        <Button 
        size="small" 
        color="primary"
        onClick={onClickDisLike}>
         {props.voteSum < 0 ? props.voteSum: ""}
         {iconeDisLike()}
        </Button>
      </CardActions>
    </PostCard>
  );
}

export default Comments