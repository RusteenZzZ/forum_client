import React, { FC, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import IMessage from '../../models/IMessage'
import Message from '../message/Message'
import Container from '../container/Container'
import HorizontalLine from '../horizontal-line/HorizontalLine'
import styles from './MessageList.module.css'
import Modal from '../UI/modal/Modal'
import MessageService from '../../services/MessageService'
import CreateMessageRequest from '../../models/request/CreateMessageRequest'

interface MessageListProps {
  messages: IMessage[]
}

const MessageList: FC<MessageListProps> = ({messages}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [repliedMessageId, setRepliedMessageId] = useState<string>('')

  const params = useParams()
  const navigate = useNavigate()
  
  const replyClickHandler = (messageId: string) => {   
    setRepliedMessageId(messageId)
    setIsVisible(true)
  }

  const replyOnMessageHandler = async ({text, toMessage} : CreateMessageRequest) => {
    await MessageService.createMessage({text, toMessage})
    
    if(params.forumId)
      navigate(`/forums/${params.forumId}/${toMessage}`)
  }

  return (
    <>
      <div className={styles.messages}>
        <Container>
          {
            messages.length > 0
              ?
                messages.map((message, index) =>
                  <div key={message.id}>
                    <Message
                      message={message}
                      replyClickHandler={() => replyClickHandler(message.id)}
                    />
                      {
                        index !== messages.length - 1
                          ? <HorizontalLine/>
                          : <></>
                      }
                  </div>
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
          ? <Modal setIsVisible={setIsVisible} reply={replyOnMessageHandler} toMessageId={repliedMessageId}/>
          : <></>
      }
    </>
  )
}

export default MessageList