import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Product from '../components/Product';
import ReactStars from 'react-rating-stars-component';
import '../css/SingleProduct.css';
import ReactImageZoom from 'react-image-zoom';
import '../Responsive.css'


const SingleProduct = () => {
  const mainImage = 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661026704198';
  const additionalImages = [
    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661026704198',
    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661026582322',
  ];

  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [orderedProduct, setOrderedProduct] = useState(true);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  return (
    <>
      <Meta title={'Product Name'} />
      <BreadCrumb title='Product Name' />
      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <div>
                  <ReactImageZoom
                    img={selectedImage}
                    zoomImage={selectedImage}
                    zoomWidth={500}
                    width={400}
                    height={250}
                  />
                </div>
              </div>
              <div className='additional-images'>
                {additionalImages.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Additional ${index + 1}`}
                    onClick={() => handleImageClick(url)}
                  />
                ))}
              </div>
            </div>
            <div className='col-6'>
              <div className='main-product-details'>
                <div className='border-bottom'>
                <h3 className='title'>Buy iPhone 14</h3>
                </div>
                <div className='border-bottom'>
                <p className='price'>2149.99 AZN</p>
                <div className='d-flex align-items-center gap-10'>
                <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor='#ffd700'
                        />
                        <p className='mb-0'>(5 rəy)</p>
                </div>
                <a href='#review'>Rəy yazın</a>
                </div>
                <div className='border-bottom py-3'>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-title'>Tip: </h3> <p className='product-data'>Mobil telefon</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-title'>Model: </h3> <p className='product-data'>Apple IPhone 14 Blue 128Gb</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-title'> Stokda: </h3> <p className='product-data'> Var</p>
                  </div>
<div className='d-flex flex-wrap gap-15'>
<span className='badge border-1 bg-white text-dark border-secondary'>128 GB</span>
<span className='badge border-1 bg-white text-dark border-secondary'>256 GB</span>
<span className='badge border-1 bg-white text-dark border-secondary'>512 GB</span>
<span className='badge border-1 bg-white text-dark border-secondary'></span>
</div>
                  <div className='d-flex gap-10 align-items-center gap-30 ms-5'>
                    <button className='button border-0' type='submit'> Karta əlavə edin</button> 
                    <button className='button border-0' type='submit'> İndi alın</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className='description-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <div className='bg-white p-3'>
                  <h4>Təsvir</h4>
                  <p>GGGGGGGGGGGG</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='review' className='reviews-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <h4 className='mb-2'>Istifadəçi rəyləri</h4>
                <div className='review-inner-wrapper'>
                  <div className='review-head d-flex justify-content-between align-items-end'>
                    <div>
                      <div className='d-flex gap-10'>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor='#ffd700'
                        />
                        <p className='mb-0'>2 rəy əsasında</p>
                      </div>
                    </div>
                    {orderedProduct && (
                      <div>
                       <a className='text-dark text-decoration-underline' href='#'> Rəy yaz</a>

                      </div>
                    )}
                  </div>

                  <div className='review-form'>
                    <h4>Rəy yazın</h4>
                    <form action='' className='d-flex flex-column gap-15'>
                      <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={true}
                          activeColor='#ffd700'
                        />
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
                      <div className='d-flex justify-content-end'>
                        <button className='submit-button'>Rəyi göndər</button>
                      </div>
                    </form>
                  </div>

                  <div className='reviews'>
                    <div className='review'>
                      <div className='d-flex gap-10 align-items-center'>
                        <h6>Gulu</h6>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor='#ffd700'
                        />
                        <p className='mt-3'> GGGGGGGG</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='popular-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <h3 className='section-heading'>Populyar məhsullar</h3>
                <Product />
              </div>
            </div>
            <div className='row'></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
