import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import CommentsCard from '../../components/CommentsCard/CommentsCard'
import useRequestData from '../../hooks/useRequestData'
import  { BASE_URL }  from '../../constants/urls'
import { PostsListContainer } from './Styled'
import CreatePostCard from './CreatePostCard'
import { goToPostPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
import { CreatePostVote, ChangePostVote, DeletePostVote } from '../../services/posts'


const FeedPage = () => {

  useProtectedPage()

  const navigate = useNavigate() 

  const posts = useRequestData([], `${BASE_URL}/posts`)

  const onClickPost = (id) => {
    goToPostPage(navigate, id)
  }

  

  const postsCards = posts && posts.map((posts) => {
    return(
      <CommentsCard
      key={posts.id}
      title={posts.title}
      body={posts.body}
      username={posts.username}
      onClick={()=> onClickPost(posts.id)}
      numeroComentarios={posts.commentCount}
      like={()=>CreatePostVote(posts.id)}
      removeLike={()=>DeletePostVote(posts.id)}
      dislike={()=> ChangePostVote(posts.id)}
      voteSum={posts.voteSum}
      userVote={posts.userVote}
      />
    )
  })

  

  return (
    <PostsListContainer>
      <CreatePostCard/>
      {posts && postsCards.length > 0 ? postsCards : <Loading/>}
    </PostsListContainer>
  )
}

export default FeedPage