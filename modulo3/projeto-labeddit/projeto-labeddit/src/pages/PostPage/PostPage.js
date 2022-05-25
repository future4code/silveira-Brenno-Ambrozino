import React from 'react'
import { useParams } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import CreateCommentCard from './CreateCommentCard'
import { PostsListContainer } from './Styled'
import useRequestData from '../../hooks/useRequestData'
import  { BASE_URL }  from '../../constants/urls'
import CommentsCard from '../../components/CommentsCard/CommentsCard'
import Comments from '../../components/Comments/Comments'
import Loading from '../../components/Loading/Loading'
import { CreatePostVote, ChangePostVote } from '../../services/posts'
import {CreateCommentVote, ChangeCommentVote, DeleteCommentVote} from '../../services/comments'

const PostPage = () => {

  useProtectedPage()
  const params = useParams()

  const post = useRequestData([], `${BASE_URL}/posts`)
  const postCard = post
  .filter((posts) => posts.id === params.id)
  .map((posts) => {
    return(
      <CommentsCard
      key={posts.id}
      title={posts.title}
      body={posts.body}
      username={posts.username}
      numeroComentarios={posts.commentCount}
      like={()=>CreatePostVote(posts.id)}
      dislike={()=>ChangePostVote(posts.id)}
      />
    )
  })

  console.log(post)

  const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
  // console.log(comments)
  const commentsCard = comments.map((com) => {
    return(
      <Comments
      key={com.id}
      title={com.title}
      body={com.body}
      username={com.username}
      like={()=>CreateCommentVote(com.id)}
      dislike={()=> ChangeCommentVote(com.id)}
      voteSum={com.voteSum}
      userVote={com.userVote}
      removeLike={()=>DeleteCommentVote(com.id)}
      />
    )
  })

  return (
    <PostsListContainer>
      {postCard.length > 0 ? postCard: <Loading/>}
      <CreateCommentCard/>
      {postCard.length > 0 ? commentsCard: <Loading/>}
    </PostsListContainer>
  )
}

export default PostPage