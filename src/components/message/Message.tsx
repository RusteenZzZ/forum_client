import React, { FC } from 'react'

import HorizontalLine from '../horizontal-line/HorizontalLine'
import IMessage from '../../models/IMessage'
import styles from './Message.module.css'
import InnerContainer from '../inner-container/InnerContainer'

interface MessageProps {
  message: IMessage
}

const Message: FC<MessageProps> = ({message}) => {
  return (
    <InnerContainer>
      <h1>{message.authorUsername}</h1>
      <span
        className={styles.messageText}
      >
        {message.text}
      </span>
    </InnerContainer>
  )
}

export default Message