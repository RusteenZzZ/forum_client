import React, { FC, useContext, useState } from 'react'

import styles from './LoginForm.module.css'
import Input from '../UI/text-input/Input'
import Button from '../UI/button/Button'
import { observer } from 'mobx-react-lite'
import { Context } from '../..'
import { useLoading } from '../../hooks/useLoading'
import Loader from '../loader/Loader'

interface LoginData {
  email: string
  password: string
}

const LoginForm: FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({email: '', password: ''})

  const {store} = useContext(Context)

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({...loginData, email: e.target.value})
  }

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({...loginData, password: e.target.value})
  }

  const login = async () => {
    await store.login(loginData.email, loginData.password)    
  }

  const {loading, isLoading, error} = useLoading(login)
  console.log(isLoading);
  
  return (
    <div className={styles.loginForm}>
      <div className={styles.loginItem}>
        <Input
          placeholder='Email...'
          value={loginData.email}
          onChange={emailChangeHandler}
        />
      </div>
      <div className={styles.loginItem}>
        <Input
          placeholder='Password...'
          value={loginData.password}
          onChange={passwordChangeHandler}
          isPassword={true}
        />
      </div>
      <div className={styles.loginItem}>
        <Button text='Login!' onClick={loading}/>
        {
          isLoading
            ?
              <Loader/>
            :
              <></>
        }
        {/* <Loader/> */}
      </div>
    </div>
  )
}

export default observer(LoginForm)