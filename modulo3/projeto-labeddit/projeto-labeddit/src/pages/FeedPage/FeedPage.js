import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import CommentsCard from '../../components/CommentsCard/CommentsCard'
import useRequestData from '../../hooks/useRequestData'
import  { BASE_URL }  from '../../constants/urls'
import { PostsListContainer } from './Styled'
import CreatePostCard from '../../components/CreatePostCard/CreatePostCard'
import { goToPostPage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'


const FeedPage = () => {

  useProtectedPage()
  const history = useHistory() 
  const posts = useRequestData([], `${BASE_URL}/posts`)
  console.log(posts)

  const onClickPost = (id) => {
    goToPostPage(history, id)
  }

  const postsCards = posts.map((posts) => {
    return(
      <CommentsCard
      key={posts.id}
      title={posts.title}
      body={posts.body}
      username={posts.username}
      onClick={()=> onClickPost(posts.id)}
      />
    )
  })

  return (
    <PostsListContainer>
      <CreatePostCard/>
      {postsCards}
    </PostsListContainer>
  )
}

export default FeedPage