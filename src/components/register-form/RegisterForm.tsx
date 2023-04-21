import React, { FC, useContext, useState } from 'react'

import styles from './RegisterForm.module.css'
import Input from '../UI/textInput/Input'
import Button from '../UI/button/Button'
import { Context } from '../..'

interface RegisterData {
  email: string
  username: string
  password: string
}

const RegisterForm: FC = () => {
  const [registerData, setRegisterData] = useState<RegisterData>(
    {
      email: '',
      username: '',
      password: ''
    }
  )

  const {store} = useContext(Context)

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({...registerData, email: e.target.value})
  }

  const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({...registerData, username: e.target.value})
  }

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({...registerData, password: e.target.value})
  }

  return (
    <div className={styles.registerForm}>
      <div className={styles.registerItem}>
        <Input
          placeholder='Email...'
          value={registerData.email}
          onChange={emailChangeHandler}
        />
      </div>
      <div className={styles.registerItem}>
        <Input
          placeholder='Username...'
          value={registerData.username}
          onChange={usernameChangeHandler}
        />
      </div>
      <div className={styles.registerItem}>
        <Input
          placeholder='Password...'
          value={registerData.password}
          onChange={passwordChangeHandler}
          isPassword={true}
        />
      </div>
      <div className={styles.registerItem}>
        <Button
          text='Register!'
          onClick={() =>
              store.register(
                registerData.email,
                registerData.username,
                registerData.password
              )
          }
        />
      </div>
    </div>
  )
}

export default RegisterForm