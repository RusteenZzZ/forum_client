import React, { FC } from 'react'

import IMessage from '../../models/IMessage'
import styles from './Message.module.css'
import InnerContainer from '../inner-container/InnerContainer'
import Button from '../UI/button/Button'
import { useNavigate, useParams } from 'react-router-dom'

interface MessageProps {
  message: IMessage
  replyClickHandler: () => void
}

const Message: FC<MessageProps> = ({message, replyClickHandler}) => {
  const navigate = useNavigate()
  const params = useParams()
  
  const viewRepliesClickHandler = () => {    
    navigate(`/forums/${params.forumId}/${message.id}`)
  }

  return (
    <InnerContainer>
      <h1>{message.authorUsername}</h1>
      <span className={styles.messageText}>
        {message.text}
      </span>
      <div className={styles.btns}>
        <div className={styles.btn}>
          <Button text='Reply' onClick={replyClickHandler}/>
        </div>
        <div className={styles.btn}>
          <Button text='View replies' onClick={viewRepliesClickHandler}/>
        </div>
      </div>
    </InnerContainer>
  )
}

export default Message