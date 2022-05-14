import React from 'react'
import { useParams } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import CreateCommentCard from '../../components/CreateCommentCard/CreateCommentCard'
import { PostsListContainer } from './Styled'
import useRequestData from '../../hooks/useRequestData'
import  { BASE_URL }  from '../../constants/urls'
import CommentsCard from '../../components/CommentsCard/CommentsCard'
import Comments from '../../components/Comments/Comments'

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
      />
    )
  })

  const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
  console.log(comments)
  const commentsCard = comments.map((com) => {
    return(
      <Comments
      key={com.id}
      title={com.title}
      body={com.body}
      username={com.username}
      />
    )
  })

  
  return (
    <PostsListContainer>
      {postCard}
      <CreateCommentCard/>
      {commentsCard}

    </PostsListContainer>
  )
}

export default PostPage