import React, { FC } from 'react'
import Container from '../components/block/Container'
import LoginForm from '../components/login-form/LoginForm'
import RegisterForm from '../components/register-form/RegisterForm'
import HorizontalLine from '../components/horizontalLine/HorizontalLine'

const Entry: FC = () => {
  return (
    <Container>
      <LoginForm/>
      <HorizontalLine/>
      <RegisterForm/>
    </Container>
  )
}

export default Entry