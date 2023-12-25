import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import '../css/ForgotPassword.css'
import '../Responsive.css'

const SignUp = () => {
  return (
 <>
 <Meta title={'Sign Up'} />
      <BreadCrumb title='Sign Up' />
      <div className='login-container'>
        <div className='row'>
          <div className='col-12'>
            <div className='login-form'>
              <h3 className='text-center mb-3'>Qeydiyyatdan keç</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <label>
                  <input
                    type='text'
                    name='name'
                    placeholder='Ad'
                    className='form-control'
                  />
                </label>
                <label>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='form-control'
                  />
                </label>
                <label> 
                  <input
                    type='tel'
                    name='mobile'
                    placeholder='Telefon nömrəsi '
                    className='form-control'
                  />
                </label>
                <label>
                  <input
                    type='password'
                    name='password'
                    placeholder='Şifrə '
                    className='form-control'
                  />
                </label>
                <div>
                
                  <div className='d-flex justify-content-center gap-15 align-items-center'>
                    <button className='button border-0'>Qeydiyyatdan keç</button>
                   
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
 </>
  )
}

export default SignUp;