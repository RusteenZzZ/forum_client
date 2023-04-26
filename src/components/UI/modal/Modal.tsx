import React, { FC, useState } from 'react'

import styles from './Modal.module.css'
import Container from '../../container/Container'
import InnerContainer from '../../inner-container/InnerContainer'
import Input from '../text-input/Input'
import Button from '../button/Button'

interface ModalProps {
  setIsVisible: (arg: boolean) => any
}

const Modal: FC<ModalProps> = ({setIsVisible}) => {
  const [reply, setReply] = useState<string>('')

  const replyChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReply(e.target.value)
  }

  const clickOnBackgroundHandler = () => {
    setIsVisible(false)
  }

  const clickOnModalHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  console.log(reply);
  
  return (
    <div className={styles.modal} onClick={clickOnBackgroundHandler}>
      <div className={styles.modalBody} onClick={clickOnModalHandler}>
        <Container>
          <InnerContainer>
            <div className={styles.modalItem}>
              <Input placeholder="Type here..." value={reply} onChange={replyChangeHandler}/>
            </div>
            <div className={styles.modalItem}>
              <Button text="Reply" onClick={() => 5}/>
            </div>
          </InnerContainer>
        </Container>
      </div>
    </div>
  )
}

export default Modal