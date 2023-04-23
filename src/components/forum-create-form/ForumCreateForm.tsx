import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './ForumCreateForm.module.css'
import Input from '../UI/text-input/Input'
import Button from '../UI/button/Button'
import ForumService from '../../services/ForumService'
import TextArea from '../UI/text-area/TextArea'

const ForumCreateForm: FC = () => {
  const [topic, setTopic] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  const topicChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value)
  }

  const descriptionChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  const createForum = async () => {
    const response = await ForumService.createForum({topic, description})
    if(response)
      navigate(response.data.id)
  }

  return (
    <>
      <div className={styles.createForumItem}>
        <Input
          placeholder='Topic...'
          value={topic}
          onChange={topicChangeHandler}
        />
      </div>
      <div className={styles.createForumItem}>
        <TextArea
          placeholder='Description...'
          value={description}
          onChange={descriptionChangeHandler}
        />
      </div>
      <div className={styles.createForumItem}>
        <Button text='Create!' onClick={createForum}/>
      </div>
    </>
  )
}

export default ForumCreateForm