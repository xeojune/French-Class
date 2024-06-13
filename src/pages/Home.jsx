import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Content from '../components/Content/Content'
import '../styles/Home.css'

function Home() {
  return (
    <div className='dashboard'>
        <NavBar/>
        <div className="dashboard--content">
          <Content />
        </div>
    </div>
  )
}

export default Home