import React from 'react'
import useUnProtectedPage from '../../hooks/useUnProtectedPage'

const ErrorPage = () => {
  useUnProtectedPage()
  return (
    <div>ErrorPage</div>
  )
}

export default ErrorPage