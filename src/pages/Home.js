import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Home.css'; 
import Marquee from "react-fast-marquee";
import Specials from '../components/Specials';
import Product from '../components/Product';
import PopularProducts from '../components/PopularProducts';
import '../Responsive.css'

const Home = () => {
  const images = [
    // 'images/sayt-banneri-yeni-il-kredit-və-nağd (2)-1920x700.jpg',
    'images/sayt-banneri-yeni-il-tv-1920x700.jpg',
    'images/13t-banner-1920x700.jpg',
    'images/12-banner-1920x700.jpg'
  ];

  const services = [
    {
      imageSrc: 'images/service-02.png',
      alt: 'services',
      title: 'Endirim təklifləri',
      description: '75%-dək endirimlər',
    },
    {
      imageSrc: 'images/service-03.png',
      alt: 'services',
      title: '24/7 Operator',
      description: 'Mağaza mütəxəssisi ilə alış-veriş edin',
    },
    {
      imageSrc: 'images/service-04.png',
      alt: 'services',
      title: 'Sərfəli qiymətlər',
      description: 'Sərfəli qiymətlərlə əldə edin',
    },
    {
      imageSrc: 'images/service-05.png',
      alt: 'services',
      title: 'Təhlükəsiz ödənişlər',
      description: '100% qorunur',
    },
  ];

  const products = [
    {
      title: 'Smart saatlar',
      image: 'images/r920-black.jpg',
      alt: 'Smartwatches',
    },
    {
      title: 'Qulaqcıqlar',
      image: 'images/_d0_9d_d0_be_d0_b2_d1_8b_d0_b9-_d0_bf_d1_80_d0_be_d0_b5_d0_ba_d1_82-25-1_png_1.png',
      alt: 'Smarttv',
    },
    {
      title: 'Musiqi və əyləncə',
      image: 'images/new_project_-_2023-02-05t130904.036.png',
      alt: 'MusicGaming',
    },
    {
      title: 'Kameralar',
      image: 'images/_-_2023-03-17t122243.515.png',
      alt: 'Camera',
    },
    {
      title: 'Saç ütüləri və fenləri',
      image: 'images/dyson-corrale-straightener-hs07-nickel-copper.png',
      alt: 'Camera',
    },
    {
      title: 'Telefon və Planşetlər',
      image: 'images/new_project_-_2023-08-11t091340.652.png',
      alt: 'Mobiletablet',
    },
    {
      title: 'Dinamiklər',
      image: 'images/vvvvv.png',
      alt: 'speaker',
    },
    {
      title: 'Kompüter və notbuklar',
      image: 'images/tm-dg-kot-1114-nb-2391-11.jpg',
      alt: 'computerlaptop',
    },
    {
      title: 'Stasionar',
      image: 'images/pl1.png',
      alt: 'computerlaptop',
    },
  ];

  return (
    <>
    <section className='home-container-1 py-5'>
        <div className='container-xxl'>
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            useKeyboardArrows={true}
            autoPlay={true}
            interval={5000}
            transitionTime={500}
            stopOnHover={true}
            swipeable={true}
          >
            {images.map((image, index) => (
              <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />

              </div>
            ))}
          </Carousel>
        </div>
    </section>

    <section className='home-container-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services row'>
              {
                services.map(service => (
                  <div className='col-lg-3 col-md-6 '>
                    <div>
                      <img src={service.imageSrc} alt='services' />
                    </div>
                    <div>
                      <h6>{service.title}</h6>
                      <p>{service.description}</p>
                    </div>
                   </div> 
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='home-container-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories align-items-center row'>
              {
                  products.map(product => (
              <div className='product-card home col-lg-4 col-md-6 col-sm-12'>
                  <div className='p-3 content'>
                  <div className='d-flex gap align-items-center'>
                    <h6>{product.title}</h6>
                    <p></p>
                    <div className='image_container'>
                    <img src={product.image} alt='Smartwatches'/>
                    </div>
                  </div>
                  </div>
              </div>
                  ))
              }
            </div>
          </div>
        </div>
      </div>
    </section> 

    <section className='special-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Çox satılanlar</h3>
          </div>
        </div>
        <div className='row'>
          <Product />
    
        </div>
      </div>
    </section>

    <section className='famous-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='famous-card position-relative'>
              <img src="images/apple-macbook-air-15-m2-mqkp3rua-space-grey.png" className='img-fluid' alt='fam'/>
              <div className='famous-content position-absolute'>
                <h5 >Apple MacBook</h5>
                <h6>Air 15 M2 Space Gray</h6>
                <p>550 AZN-dən / 6 ay</p>
                <p>275 AZN-dən / 12 ay</p>
                <p>194 AZN-dən / 18 ay</p>
              </div>

            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='famous-card position-relative'>
              <img src="images/fold5-black.png" className='img-fluid' alt='fam'/>
              <div className='famous-content position-absolute'>
                <h5 >Samsung Galaxy Z Fold5</h5>
                <h6>1 TB Black</h6>
                <p>387 AZN-dən / 6 ay</p>
                <p>310 AZN-dən / 12 ay</p>
                <p>266 AZN-dən / 18 ay</p>
              </div>

            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='famous-card position-relative'>
              <img src="images/dyson-airwrap-complete-long-hs05-nickel-copper.jpeg" className='img-fluid' alt='fam'/>
              <div className='famous-content position-absolute'>
              <h5 >Dyson Airwrap Complete Long</h5>
                <h5 >HS05 nickel copper</h5>
                <p>383 AZN-dən / 6 ay</p>
                <p>191 AZN-dən / 12 ay</p>
                <p>127 AZN-dən / 18 ay</p>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>

    <section className='special-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Xüsusi məhsullar</h3>
          </div>
        </div>
        <div className='row'>
          <Specials />
        </div>
        
      </div>
    </section>
    <section className='marquee-wrapper py-5'>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <div className='marque-inner-wrapper card-wrapper'>
              <Marquee className='marquee'>
                <div className='mx-2'>
                  <img src='images/brand-01.png' alt='brand' className='img-fluid' />
                </div>
                <div className='mx-2'>
                  <img src='images/huawei-honor-logo-1-2.png' alt='brand' className='img-fluid' />
                </div>
                <div className='mx-2'>
                  <img src='images/brand-03.png' alt='brand' className='img-fluid' />
                </div>
                <div className='mx-2'>
                  <img src='images/brand-04.png' alt='brand' className='img-fluid' />
                </div>
                <div className='mx-2'>
                  <img src='images/brand-05.png' alt='brand' className='img-fluid' />
                </div>
                <div className='mx-2'>
                  <img src='images/brand-06.png' alt='brand' className='img-fluid' />
                </div>
                <div className='mx-2'>
                  <img src='images/brand-07.png' alt='brand' className='img-fluid' />
                </div>
                <div className='mx-2'>
                  <img src='images/1920px-casio-logosvg.png' alt='brand' className='img-fluid' />
                </div>
              </Marquee>
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
          </div>
        </div>
        <div className='row'>
          <PopularProducts />
      
        </div>
      </div>
    </section>


    </>
    
  );
}

export default Home;
