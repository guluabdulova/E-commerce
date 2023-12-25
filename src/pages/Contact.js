import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import '../css/Contact.css'; 
import '../Responsive.css'

const Contact = () => {
  return (
    <>
      <Meta title={'Contact'} />
      <BreadCrumb title='Əlaqə' />
      <div className='contact-wrapper py-5 home-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe title='Google Maps'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.36762526665!2d49.845991575752514!3d40.37854417144582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da7c3a641cf%3A0x53a5c1e7cc11c36f!2zQXrJmXJiYXljYW4gRMO2dmzJmXQgTmVmdCB2yZkgU8mZbmF5ZSBVbml2ZXJzaXRldGk!5e0!3m2!1sen!2saz!4v1703273986645!5m2!1sen!2saz"
                width="600"
                height="450"
                style={{ border: '0', width: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
      <div className='col-12 mt-5'>
        <div className='contact-inner-wrapper d-flex flex-column flex-md-row justify-content-between'>
          <div className='contact-form'>
            <h3 className='contact-title mb-4'> Əlaqə</h3>
            <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Ad və Soyad' />
                    </div>
                    <div>
                      <input type='email' className='form-control' placeholder='Email' />
                    </div>
                    <div>
                      <input type='tel' className='form-control' placeholder='Mobil nömrə' />
                    </div>
                    <div>
                      <textarea
                        name=''
                        id=''
                        cols='30'
                        className='w-100 form-control'
                        rows='10'
                        placeholder='Rəy'
                      ></textarea>
                    </div>
                    <button className='submit-button'>Göndər</button>
                  </form>
          </div>
          <div className='contact-info'>
                  <h3 className='contact-title mb-4'> Bizimlə əlaqə saxlayın</h3>
                  <ul className='contact-list'>
                    <li>
                      <FiMapPin className='contact-icon' />
                      <span>16/21 Azadlıq küçəsi, Bakı, Azərbaycan</span>
                    </li>
                    <li>
                      <FiPhone className='contact-icon' />
                      <span>+994 00 000 00 00</span>
                    </li>
                    <li>
                      <FiMail className='contact-icon' />
                      <span>elektrogalaksi@mail.com</span>
                    </li>
                    <li>
                      <FiClock className='contact-icon' />
                      <span>İş saatları: Bazar ertəsi-Cümə, 9:00 - 18:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
