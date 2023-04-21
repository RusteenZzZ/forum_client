import React, { FC, useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { Context } from '../..'
import { privateRoutes, publicRoutes, commonRoutes } from '../../routes'

const AppRouter: FC = () => {
  const {store} = useContext(Context)

  useEffect(() => {
    store.validateToken()
  }, [])
  
  return (
    store.getIsAuth()
      ? 
        <Routes>
          {
            privateRoutes.concat(commonRoutes).map((route, index) =>         
              <Route key={index} path={route.path} element={route.element}/>
            )
          }
          <Route path="*" element={<Navigate to="/forums"/>}/>
        </Routes>
      : 
        <Routes>
          {
            publicRoutes.concat(commonRoutes).map((route, index) =>
              <Route key={index} path={route.path} element={route.element}/>
            )
          }
          <Route path="*" element={<Navigate to="/entry"/>}/>
        </Routes>
    
  )
}

export default observer(AppRouter)