import React, { FC } from 'react'

import IForumInfo from '../../models/IForumsInfo'
import HorizontalLine from '../horizontal-line/HorizontalLine'
import Container from '../container/Container'
import styles from './ForumDescription.module.css'

interface ForumDescriptionProps {
  forum: IForumInfo
}

const ForumDescription: FC<ForumDescriptionProps> = ({forum}) => {  
  return (
    <div className={styles.forumDescription}>
      <Container>
        <h1>{forum.topic}</h1>
        <span>Created by: {forum.creatorUsername}</span>
        <HorizontalLine/>
        <div>{forum.description}</div>
      </Container>
    </div>
  )
}

export default ForumDescription