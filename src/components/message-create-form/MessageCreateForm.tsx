import React, { FC, useState } from 'react'

import Container from '../container/Container'
import Input from '../UI/text-input/Input'
import Button from '../UI/button/Button'
import styles from './MessageCreateForm.module.css'
import MessageService from '../../services/MessageService'
import IMessage from '../../models/IMessage'
import { useLoading } from '../../hooks/useLoading'
import Loader from '../loader/Loader'

interface MessageCreateFormProps {
  updateMessages: (arg: IMessage[]) => void
  forumId: string
}

const MessageCreateForm: FC<MessageCreateFormProps> = ({updateMessages, forumId}) => {
  const [value, setValue] = useState<string>('')

  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const createMessage = async () => {
    const response = await MessageService.createMessage({
      forumId,
      text: value
    })

    if(response)
      updateMessages(response.data)
  }

  const {loading, isLoading, error} = useLoading(createMessage)

  const onClickHandler = () => {
    loading()
    setValue('')
  }

  return (
    <Container>
      <div className={styles.messageCreateFormItem}>
        <Input
          placeholder='Text...'
          value={value}
          onChange={textChangeHandler}
        />
      </div>
      <div className={[styles.messageCreateFormItem, styles.messageCreateBtn].join(' ')}>
        <Button text='Reply' onClick={onClickHandler}/>
        {
          isLoading
            ?
              <Loader/>
            :
              <></>
        }
      </div>
    </Container>
  )
}

export default MessageCreateForm