import React from 'react'
import "./MyTemplate.scss"
import NavBar from '../components/NavBar/NavBar'
import Header from '../components/Header/Header'

function MyTemplate({children}) {
  return (
    <section className='MyTemplate'>
        <Header/>
        <NavBar/>
        <div className='container'>
            {children}
        </div>
    </section>
  )
}

export default MyTemplate