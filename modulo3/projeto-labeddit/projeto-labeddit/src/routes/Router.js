import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostPage from '../pages/PostPage/PostPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = (props) => {
  return (
    <Switch>
        <Route exact path = "/">
            <LoginPage rightButtonText={props.rightButtonText} setRightButtonText={props.setRightButtonText}/>
        </Route>
        <Route exact path = "/feed">
            <FeedPage/>
        </Route>
        <Route exact path = "/post/:id">
            <PostPage/>
        </Route>
        <Route exact path = "/signup">
            <SignUpPage/>
        </Route>
        <Route>
            <ErrorPage/>
        </Route>
    </Switch>
  )
}

export default Router