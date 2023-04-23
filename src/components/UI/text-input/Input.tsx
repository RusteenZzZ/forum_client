import react, { FC } from 'react'

import styles from './Input.module.css'

interface InputProps {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isPassword?: boolean
}

const Input: FC<InputProps> = ({placeholder, value, onChange, isPassword}) => {
  return (
    <input
      className={styles.inp}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={isPassword ? 'password' : 'text'}
    />
  )
}

export default Input