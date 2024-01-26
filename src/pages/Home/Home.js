import React from 'react'
import './home.css'
import Breadcrumbs from '../breadcumbs/Breadcrumbs'
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <>

      <div className='first-half'>
        <div className='title-section'>

          <p style={{ fontSize: '17px' }}>Dashboard</p>
          <div className='breadcrumb'>
       
              <Breadcrumbs></Breadcrumbs>
         
          </div>
        </div>

        <div className='button-section'>
          <i class="ri-add-fill plus"></i>
          <button>Create New Entry</button>

          <i class="ri-add-fill plus"></i>
          <button>Enroll Child</button>
        </div>

      </div>



      <section>

        <div className='hero-section'>
          <div className='Heading'>
            <h2>Welcome to Retailer Panel</h2>
          </div>


          <div className='container'>
            <div className='card card-1'><div className='card-item'>Points Balance</div></div>
            <div className='card  card-2'><div className='card-item'>Total Application</div></div>
            <div className='card card-3' ><div className='card-item'>Completed</div></div>
            <div className='card card-4'><div className='card-item'>Rejected</div></div>
          </div>
          <div className='container'>
            <div className='card card-1'><div className='card-item'>Child Balance</div></div>
            <div className='card card-2'><div className='card-item'>Total Child Application</div></div>
            <div className='card card-3 '><div className='card-item'>Total Child Completed</div></div>
            <div className='card card-4'><div className='card-item'>Total Child Rejected</div></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home;