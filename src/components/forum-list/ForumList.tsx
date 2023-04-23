import React, { FC, useEffect, useState } from 'react'

import styles from './ForumList.module.css'
import IForumInfo from '../../models/IForumsInfo'
import ForumService from '../../services/ForumService'
import ForumInfo from '../forum-info/ForumInfo'
import ForumCreateForm from '../forum-create-form/ForumCreateForm'
import Container from '../container/Container'
import { useLoading } from '../../hooks/useLoading'
import Loader from '../loader/Loader'

const ForumList: FC = () => {
  const [forumList, setForumList] = useState<IForumInfo[]>([])

  const getForums = async () => {
    const response = await ForumService.getForums()
    if(response) {
      setForumList(response.data.forums)
    }
  }

  const {loading, isLoading, error} = useLoading(getForums)

  useEffect(() => {
    loading()
  }, [])

  return (
    <>
      <Container>
        <ForumCreateForm/>
      </Container>
      <Container>
        {
          isLoading
            ?
              <Loader/>
            :
              (
                forumList.length === 0
                ?
                  <span>No forums yet...</span>
                :
                  forumList.map(forum =>
                    <div key={forum.id} className={styles.forum_list_item}>
                      <ForumInfo
                        id={forum.id}
                        topic={forum.topic}
                        creator={forum.creator}
                        creatorUsername={forum.creatorUsername}
                      />
                    </div>
              )
          )
        }
      </Container>
    </>
  )
}

export default ForumList