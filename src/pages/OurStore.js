import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import '../css/OurStore.css';
import Product from '../components/Product.js'
import '../Responsive.css'

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const colors = [
    "#ff0000", // Red
    "#00ff00", // Green
    "#0000ff", // Blue
    "#ff9900", // Orange
    "#9900cc", // Purple
    "#0099cc", // Light Blue
    "#ffcc00", // Yellow
    "#669900", // Olive Green
    "#ff66cc", // Pink
    "#333333"  // Dark Gray
  ];

  return (
    <>
      <Meta title={'Our Store'} />
      <BreadCrumb title='Our Store' />
      <div className='store-container container-xxl home-wrapper-2 pb-5  justify-content-center'>
        <div className='row'>
          <div className='col-lg-3 p-0'>
            <div className='filter '>
              <h3 className='f-title'>Kateqoriyalar üzrə alış-veriş edin</h3>
            </div>
            <div>
              <ul className='ps-0 list-unstyled mb-0 upper_category'>
                <li>Saat</li>
                <li>Televizor</li>
                <li>Notbuk və kompüter</li>
              </ul>
            </div>
            <div className='filter  col-md-12'>
              <h3 className='f-title'>Filtr edin</h3>
              <h5 className='sub-t'>Mövcudluğu</h5>
              <div className='form'>
                <input className='check-input' type='checkbox' value='' id='stokdaVar' />
                <label className='check-label' htmlFor='stokdaVar'>
                  Stokda var(2)
                </label>
              </div>
              <div className='form'>
                <input className='check-input' type='checkbox' value='' id='stokdaYoxdur' defaultChecked />
                <label className='check-label' htmlFor='stokdaYoxdur'>
                  Stokda yoxdur(0)
                </label>
              </div>
              <h5 className='sub-t'>Qiymət aralığı</h5>
              <div className='d-flex align-items-center gap-10'>
                <div className='form-floating'>
                  <input type='email' className='form-control' id='floatingInput' placeholder='-dan' />
                  <label htmlFor='floatingInput'>-dan</label>
                </div>
                <div className='form-floating'>
                  <input type='email' className='form-control' id='floatingInput1' placeholder='-dək' />
                  <label htmlFor='floatingInput1'>-dək</label>
                </div>
              </div>
              <h5 className='sub-t'>Rəngi</h5>
              <div>
                <ul className='color ps-0'>
                  {colors.map(color => <li style={{backgroundColor:color}}></li>)}
                </ul>
              </div>
              <h5 className='sub-t'>Ölçüsü</h5>
              <div className='form'>
                <input className='check-input' type='checkbox' value='' id='sizeXS' />
                <label className='check-label' htmlFor='sizeXS'>
                  xS(2)
                </label>
                <input className='check-input' type='checkbox' value='' id='sizeS' />
                <label className='check-label' htmlFor='sizeS'>
                  S(2)
                </label>
                <input className='check-input' type='checkbox' value='' id='sizeM' />
                <label className='check-label' htmlFor='sizeM'>
                  M(2)
                </label>
              </div>
            </div>
            <div className='filter  ' >
              <h3 className='f-title'>Məhsul etiketləri</h3>
              <div className='product-tags d-flex flew-wrap align-items-center gap-10 row gap-3 justify-content-center'>
                <span className='badge col-lg-4 bg-light text-secondary rounded-3 py-2 px-3'>
                  Telefon
                </span>
                <span className='badge col-lg-4 bg-light text-secondary rounded-3 py-2 px-3'>
                  Saç ütüsü
                </span>
                <span className='badge col-lg-4 bg-light text-secondary rounded-3 py-2 px-3'>
                  Soyuducu
                </span>
                <span className='badge col-lg-4 bg-light text-secondary rounded-3 py-2 px-3'>
                  Qulaqcıq
                </span>
              </div>
            </div>
            <div className='filter-sort-grid py-3'>
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-10'>
                  <p className='mb-0 d-block' style={{ width: '100px' }}>
                    Çeşidlə
                  </p>
                  <select
                    name=''
                    className='form-control form-select'
                    id=''
                  >
                    <option value='featured'>Seçilmiş</option>
                    <option value='date'>Ən yenilər</option>
                    <option value='bestseller'>Ən çox satılan</option>
                    <option value='alphab1'>Əlifba sırası ilə, A-Z</option>
                    <option value='alphab2'>Əlifba sırası ilə, Z-A</option>
                    <option value='decrease'>Ən aşağı qiymət</option>
                    <option value='increase'>Ən yuxarı qiymət</option>
                  </select>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <p className='total-p mb-0'>30 məhsul</p>
                  {/* <div className='d-flex gap-10 align-items-center'>
                    {[4, 3, 2, 1].map((num) => (
                      <img
                        key={num}
                        src={`images/gr${num}.svg`}
                        onClick={() => {
                          setGrid(num);
                        }}
                        className={`d-block img-fluid grid-image ${
                          grid === num ? 'active' : ''
                        }`}
                        alt='grid'
                      />
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
            </div>
          <div className='col-lg-9'>
            
            <div className='products row py-5'>
              <Product grid={grid} />
              <Product grid={grid} />
              <Product grid={grid} />
              <Product grid={grid} />
              <Product grid={grid} />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;