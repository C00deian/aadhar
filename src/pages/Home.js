import React from 'react'
import './home.css'
import Breadcrumbs from './breadcumbs/Breadcrumbs'

const Home = () => {
  return (
    <main className='main'>
      <div className='first-half'>
        <span>Dashboard</span>
        <div className='breadcrumb'>
       <Breadcrumbs></Breadcrumbs>
       
        </div>
</div>
      <div className='Second-half'>
        <div className='btn'>
          <i class="ri-add-fill plus"></i>
          <button className='button'> Create New Entry</button>
         
</div>
       

      </div>

    </main>
  )
}

export default Home;