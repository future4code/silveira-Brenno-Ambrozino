import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {PostCard} from './Styled'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
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

const CommentsCard = (props) => {
  const classes = useStyles();

  const [like,setLike] = useState(false)
  const [dislike,setDisLike] = useState(false)

  const onClickLike = () => {
    if(like === false){
      props.like()
      setLike(true)
    } else {
      props.removeLike()
      setLike(false)
    }
  }

  const iconeLike = () => {
    if(like === false){
      return <ThumbUpAltOutlinedIcon/>
    } else {
      return <ThumbUpAltIcon/>
    }
  }

  const onClickDisLike = () => {
    if(dislike === false){
      props.dislike()
      setDisLike(true)
    } else {
      props.removeDisLike()
      setDisLike(false)
    }
  }

  const iconeDisLike = () => {
    if(dislike === false){
      return <ThumbDownAltOutlinedIcon/>
    } else {
      return <ThumbDownAltIcon/>
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
          {iconeLike()}
        </Button>
        <Button 
        size="small" 
        color="primary"
        onClick={onClickDisLike}>
         {iconeDisLike()}
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