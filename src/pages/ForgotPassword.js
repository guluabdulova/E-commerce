import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import { Link } from 'react-router-dom';
import '../css/ForgotPassword.css';
import '../Responsive.css'


const ForgotPassword = () => {
  return (
    <>
      <Meta title={'Forgot password'} />
      <BreadCrumb title='Forgot password' />
      <div className='login-container'>
        <div className='row'>
          <div className='col-12'>
            <div className='login-form'>
              <h3 className='text-center mb-3'>Şifrənizi yeniləyin</h3>
              <p className='text-center my-2 mb-3'>
                Şifrənizi sıfırlamaq üçün sizə e-poçt göndərəcəyik
              </p>
              <form action='#' className='d-flex flex-column gap-15'>
                <label htmlFor='email'>
                  Email:
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                    className='form-control'
                  />
                </label>

                <div>
                  <div className='d-flex justify-content-center gap-15 align-items-center'>
                    <button className='submit-button'>Göndər</button>
                    <Link to='/login' className='button-cancel'>
                      Ləğv et
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
