import React, { FC } from 'react'

import styles from './InnerContainer.module.css'

interface InnerContainerProps {
  children: React.ReactNode
}

const InnerContainer: FC<InnerContainerProps> = ({children}) => {
  return (
    <div className={styles.innerContainer}>
      {children}
    </div>
  )
}

export default InnerContainer