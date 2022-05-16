import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostPage from '../pages/PostPage/PostPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = (props) => {
  return (
    <Routes>
        <Route index element = {<LoginPage rightButtonText={props.rightButtonText} setRightButtonText={props.setRightButtonText}/>}/>
        <Route path = "/feed" element={<FeedPage/>} />
        <Route path = "/post/:id" element={<PostPage/>}/>
        <Route path = "/signup" element={<SignUpPage/>}/>
        <Route path= "*" element={<ErrorPage/>}/>
    </Routes>
  )
}

export default Router