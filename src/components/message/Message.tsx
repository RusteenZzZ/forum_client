import React, { FC } from 'react'

import HorizontalLine from '../horizontal-line/HorizontalLine'
import IMessage from '../../models/IMessage'
import styles from './Message.module.css'

interface MessageProps {
  message: IMessage
}

const Message: FC<MessageProps> = ({message}) => {
  return (
    <>
      <h1>{message.authorUsername}</h1>
      <HorizontalLine/>
      <span
        className={styles.messageText}
      >
        {message.text}
      </span>
    </>
  )
}

export default Message