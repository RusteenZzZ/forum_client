import React, { FC } from 'react'

import styles from './TextArea.module.css'

interface TextAreaProps {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: FC<TextAreaProps> = ({placeholder, value, onChange}) => {
  return (
    <textarea
      className={styles.textArea}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default TextArea