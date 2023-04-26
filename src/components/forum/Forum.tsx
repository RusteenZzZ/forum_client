import React, { FC, useEffect, useState } from 'react'

import ForumService from '../../services/ForumService'
import IForumInfo from '../../models/IForumsInfo'
import IMessage from '../../models/IMessage'
import Loader from '../loader/Loader'
import ForumDescription from '../forum-description/ForumDescription'
import MessageCreateForm from '../message-create-form/MessageCreateForm'
import MessageList from '../message-list/MessageList'

interface ForumProps {
  forumId: string
}

const Forum: FC<ForumProps> = ({forumId}) => {
  const [forum, setForum] = useState<IForumInfo>({} as IForumInfo)
  const [messages, setMessages] = useState<IMessage[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getForumDetails = async () => {
    const response = await ForumService.getForumDetails({forumId})
    if(response) {
      setForum(response.data.forumDetails)
      setMessages(response.data.messages)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getForumDetails()
  }, [])

  return (
    <>
      {
        isLoading
          ?
            <Loader/>
          :
            <>
              <ForumDescription forum={forum}/>
              <MessageCreateForm updateMessages={setMessages} forumId={forum.id}/>
              <MessageList messages={messages}/>
            </>
      }
    </>
  )
}

export default Forum