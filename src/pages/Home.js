import React from 'react'
import './home.css'
import Breadcrumbs from './breadcumbs/Breadcrumbs'

const Home = () => {
  return (
    <>
      <main className='main'>
        <div className='first-half'>
          <div className='title-section'>
            <span style={{fontWeight:'bold'}}>Dashboard</span>
            <div className='breadcrumb'>
              <Breadcrumbs></Breadcrumbs>
          </div>
          </div>

            <div className='button-section'>
            <i class="ri-admin-fill plus"></i> 
            <button>Create New Entry</button>
    {''}
              <i class="ri-admin-fill plus"></i>
              <button>Enroll Child</button>
         
             
          </div>
       
        </div>
     
         
         

      </main>
      <section>


        <div className='hero-section'>
          <div className='Heading'>
            <h2>Welcome to Retailer Panel</h2>
          </div>
       

          <div className='container'>
            <div className='card'><div className='card-item'>card1</div></div>
            <div className='card'><div className='card-item'>card1</div></div>
            <div className='card'><div className='card-item'>card1</div></div>
            <div className='card'><div className='card-item'>card1</div></div>
          </div>
          <div className='container'>
            <div className='card'><div className='card-item'>card1</div></div>
            <div className='card'><div className='card-item'>card1</div></div>
            <div className='card'><div className='card-item'>card1</div></div>
            <div className='card'><div className='card-item'>card1</div></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;