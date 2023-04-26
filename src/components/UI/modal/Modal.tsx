import React, { FC, useState } from 'react'

import styles from './Modal.module.css'
import Container from '../../container/Container'
import InnerContainer from '../../inner-container/InnerContainer'
import Input from '../text-input/Input'
import Button from '../button/Button'
import CreateMessageRequest from '../../../models/request/CreateMessageRequest'
import IMessage from '../../../models/IMessage'
import MessageService from '../../../services/MessageService'

interface ModalProps {
  setIsVisible: (arg: boolean) => any
  reply: (arg: CreateMessageRequest) => Promise<any>
  toMessageId: string
  updateMessages?: (arg: IMessage[]) => any
  navigate?: () => any
}

const Modal: FC<ModalProps> = ({setIsVisible, reply, toMessageId, updateMessages = null, navigate = null}) => {
  const [replyText, setReplyText] = useState<string>('')  

  const replyChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyText(e.target.value)
  }

  const clickOnBackgroundHandler = () => {
    setIsVisible(false)
  }

  const clickOnModalHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const clickOnReplyBtnHandler = async () => {
    await reply({text: replyText, toMessage: toMessageId})
    if(updateMessages) {
      const response = await MessageService.getMessageReplies({messageId: toMessageId})
      if(response)
        updateMessages(response.data)
    }
    if(navigate)
      navigate()
    setIsVisible(false)
  }
    
  return (
    <div className={styles.modal} onClick={clickOnBackgroundHandler}>
      <div className={styles.modalBody} onClick={clickOnModalHandler}>
        <Container>
          <InnerContainer>
            <div className={styles.modalItem}>
              <Input placeholder="Type here..." value={replyText} onChange={replyChangeHandler}/>
            </div>
            <div className={styles.modalItem}>
              <Button text="Reply" onClick={clickOnReplyBtnHandler}/>
            </div>
          </InnerContainer>
        </Container>
      </div>
    </div>
  )
}

export default Modal