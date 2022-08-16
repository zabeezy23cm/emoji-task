import React from 'react'
import './Menu.css'
import NavBar from '../NavBar'
import TableInfo from '../TableInfo'

const Index = () => {
  return (
    <div className='parent'>
      <div className='firstChild'>
        <NavBar/>
      </div>
      <div className='secondChild'>
        <h1>Artem gay</h1>
        <h2>Eslint gay</h2>
        <TableInfo/>
      </div>
    </div>
  )
}

export default Index