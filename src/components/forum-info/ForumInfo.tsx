import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './ForumInfo.module.css'
import Button from '../UI/button/Button'
import IForumInfo from '../../models/IForumsInfo'
import InnerContainer from '../inner-container/InnerContainer'

const ForumInfo: FC<Omit<IForumInfo, 'description'>> = ({id, topic, creator, creatorUsername}) => {
  const navigate = useNavigate()

  const toForum = () => {
    navigate(`/forums/${id}`)
  }

  return (
    <div>
      <InnerContainer>
        <b className={[styles.forum_info_item, styles.topic].join(' ')}>{topic}</b>
        <span className={styles.forum_info_item}>Created by: {creatorUsername}</span>
        <div className={styles.forum_info_item}>
          <Button text='Enter' onClick={toForum}/>
        </div>
      </InnerContainer>
    </div>
  )
}

export default ForumInfo