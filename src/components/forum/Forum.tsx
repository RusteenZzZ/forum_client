import React, { FC, useEffect, useState } from 'react'

import Container from '../container/Container'
import ForumService from '../../services/ForumService'
import IForumInfo from '../../models/IForumsInfo'
import IMessage from '../../models/IMessage'
import Loader from '../loader/Loader'
import ForumDescription from '../forum-description/ForumDescription'
import MessageCreateForm from '../message-create-form/MessageCreateForm'
import Message from '../message/Message'
import HorizontalLine from '../horizontal-line/HorizontalLine'
import styles from './Forum.module.css'
import Modal from '../UI/modal/Modal'

interface ForumProps {
  forumId: string
}

const Forum: FC<ForumProps> = ({forumId}) => {
  const [forum, setForum] = useState<IForumInfo>({} as IForumInfo)
  const [messages, setMessages] = useState<IMessage[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [repliedMessageId, setRepliedMessageId] = useState<string>('')

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

  const replyClickHandler = () => {
    setIsVisible(true)
  }

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
              <div className={styles.messages}>
                <Container>
                  {
                    messages.length > 0
                      ?
                        messages.map((message, index) =>
                          <>
                            <Message
                              message={message}
                              replyClickHandler={replyClickHandler}
                            />
                            {
                              index !== messages.length - 1
                                ? <HorizontalLine/>
                                : <></>
                            }
                          </>
                        )
                      :
                        <span>
                          No replies yet...
                        </span>
                  }
                </Container>
              </div>
              {
                isVisible
                  ? <Modal setIsVisible={setIsVisible}/>
                  : <></>
              }
            </>
      }
    </>
  )
}

export default Forum