import React from 'react'
import './PersonEntry.css'
import Breadcrumbs from '../../pages/breadcumbs/Breadcrumbs';

// Form.jsx


export const Input = ({ label, type, id, placeholder }) => {
  return (
    <div className="inputContainer">
      <div className="inputWrapper">
        <label htmlFor={id} className="label">
          {label}
        </label>
      </div>
      <input
        id={id}
        type={type}
        className="inputField"
        placeholder={placeholder}
      />
    </div>
  );
};
const PersonEntry = () => {
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
          <i class="ri-team-fill plus"></i>
          <button>View Customer</button>
        </div>

      </div>

      <section>
        <div className='hero-section'>
          <div className="formContainer">
            <div className='PurposeGrid '>
              <Input
                label="Purpose"
                type="text"
                id="purpase"
                placeholder="Enter Purpose"
              />
            </div>
            <div className="formGrid">
              <Input
                label="Full Name"
                type="text"
                id="full name"
                placeholder="Enter Name"
              />
              <Input
                label="Father Name"
                type="text"
                id="father"
                placeholder="Father Name"
              />
              <Input
                label="Date of Birth"
                type="date"
                id="date"
                placeholder=""
              />

              <Input
                label="Aadhaar No."
                type="number"
                id="Aadhaar"
                placeholder="Aadhaar No."
              />

              <Input
                label="Mobile No."
                type="text"
                id="text"
                placeholder="Mobile No."
              />


              <Input
                label="E-mail ID"
                type="email"
                id="name"
                placeholder="example@update.com"
              />

              <Input
                label="POI"
                type="file"
                id="file"
                placeholder=""
              />
              <Input
                label="POA"
                type="file"
                id="file"
                placeholder=""
              />
              <Input
                label="POB"
                type="file"
                id="file"
                placeholder=""
              />

            
            </div>
            <div className='PurposeGrid Address '>
              <Input
                label="Address"
                type="text"
                id="address"
                placeholder="House No, Village, City Name, District, State"
              />
              
            </div>
            

          </div>
        </div>
      </section>
    </>
  );
}

export default PersonEntry