import React, { FC } from 'react'
import Forum from '../components/forum/Forum'

const ForumPage: FC = () => {
  const urlArray = window.location.href.split('/')
  const forumId = urlArray[urlArray.length - 1]

  return (
    <Forum forumId={forumId}/>
  )
}

export default ForumPage