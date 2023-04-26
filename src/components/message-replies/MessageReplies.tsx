import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import IMessage from '../../models/IMessage'
import MessageService from '../../services/MessageService'
import { useLoading } from '../../hooks/useLoading'
import Loader from '../loader/Loader'
import Message from '../message/Message'
import MessageList from '../message-list/MessageList'
import Container from '../container/Container'
import Modal from '../UI/modal/Modal'
import CreateMessageRequest from '../../models/request/CreateMessageRequest'

type URLParams = {
  forumId: string
  messageId: string
}

const MessageReplies: FC = () => {
  const params = useParams<URLParams>()
  const [mainMessage, setMainMessage] = useState<IMessage>({} as IMessage)
  const [replyList, setReplyList] = useState<IMessage[]>([])
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const messageId = params.messageId

  const getMainMessage = async () => {
    if(!messageId) {
      return null
    }
    const response = await MessageService.getMessage({messageId})
    if(response) {      
      setMainMessage(response.data)
    }
  }

  const getReplies = async () => {
    if(!messageId) {
      setReplyList([])
    } else {
      const response = await MessageService.getMessageReplies({messageId: messageId})
      if(response) {
        setReplyList(response.data)        
      }
    }
  }

  const mainMessageLoading = useLoading(getMainMessage)
  const repliesLoading = useLoading(getReplies)
  
  useEffect(() => {
    mainMessageLoading.loading()
    repliesLoading.loading()
  }, [params])

  const clickOnReplyToMainMessageHandler = () => {
    setIsVisible(true)
  }

  const replyToMainMessage = async ({text, toMessage} : CreateMessageRequest) => {
    await MessageService.createMessage({text, toMessage})
  }

  return (
    <>
      {
        mainMessageLoading.isLoading
          ?
            <Loader/>
          :
            <>
              <Container>
                <Message message={mainMessage} replyClickHandler={clickOnReplyToMainMessageHandler}/>
              </Container>
              {
                isVisible
                  ? <Modal setIsVisible={setIsVisible} reply={replyToMainMessage} toMessageId={mainMessage.id}/>
                  : <></>
              }
            </>
      }
      {
        repliesLoading.isLoading
          ?
            <Loader/>
          :
            replyList.length > 0
              ?
                <MessageList messages={replyList}/>
              :
                <>
                </>
      }
    </>
  )
}

export default MessageReplies