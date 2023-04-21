import react, { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import styles from './Navbar.module.css'
import Button from '../button/Button'
import { Context } from '../../..'
import { ENTRY_PATH, FORUMS_PATH, INFO_PATH } from '../../../routes'

const Navbar: FC = () => {
  const navigate = useNavigate()
  const {store} = useContext(Context)

  const toEntry = () => {
    navigate(ENTRY_PATH)
  }

  const toInfo = () => {
    navigate(INFO_PATH)
  }

  const toForums = () => {
    navigate(FORUMS_PATH)
  }

  const logout = () => {
    store.logout()
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_btn}>
        <Button text='Info' onClick={toInfo} />
      </div>
      {
        store.getIsAuth()
          ?
            <>
              <div className={styles.navbar_btn}>
                <Button text='Forums' onClick={toForums} />
              </div>
              <div className={styles.navbar_btn}>
                <Button text='Logout' onClick={logout} />
              </div>
            </>
          :
            <div className={styles.navbar_btn}>
              <Button text='Login/Register' onClick={toEntry} />
            </div>
      }
    </div>
  )
}

export default observer(Navbar)