import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import '../css/Login.css';
import '../Responsive.css';

const Login = () => {
  return (
    <>
      <Meta title={'Login'} />
      <BreadCrumb title='Login' />

      <div className='login-container'>
        <div className='row'>
          <div className='col-12'>
            <div className='login-form'>
              <h3 className='text-center mb-3'>Login</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <label>
                  Email:
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='form-control'
                  />
                </label>
                <label>
                  Password:
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='form-control'
                  />
                </label>
                <div>
                <Link to='/forgot-password' className='text-dark'>Şifrəni unutmusunuz?</Link>
                  <div className='d-flex justify-content-center gap-15 align-items-center'>
                    <button className='button' type='submit'>Daxil ol</button>

                    <Link to='/signup' className='button signup text-dark'>
                      Qeydiyyatdan keç
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

export default Login;
