import React, { FC } from 'react'

import HorizontalLine from '../horizontal-line/HorizontalLine'
import IMessage from '../../models/IMessage'
import styles from './Message.module.css'
import InnerContainer from '../inner-container/InnerContainer'
import Button from '../UI/button/Button'

interface MessageProps {
  message: IMessage
  replyClickHandler: () => void
}

const Message: FC<MessageProps> = ({message, replyClickHandler}) => {
  return (
    <InnerContainer>
      <h1>{message.authorUsername}</h1>
      <span
        className={styles.messageText}
      >
        {message.text}
      </span>
      <div className={styles.btns}>
        <div className={styles.btn}>
          <Button text='Reply' onClick={replyClickHandler}/>
        </div>
        <div className={styles.btn}>
          <Button text='View replies' onClick={() => 5}/>
        </div>
      </div>
    </InnerContainer>
  )
}

export default Message