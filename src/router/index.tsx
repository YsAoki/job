import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import TopPage from '../components/Xpages/TopPage'

const ReactRouter: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<TopPage />}/>
    </Routes>
  )
}

export default ReactRouter