import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineCompareArrows } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import '../css/Header.css';
import '../Responsive.css'
import { useState } from 'react';
import { IoMenuOutline } from "react-icons/io5";

const AppNavbar = () => {
  const  [isMenuOpened,SetIsMenuOpened] = useState(false);
  const navigationHandler = e => {
    // e.preventDefault();
    SetIsMenuOpened(false)
  } 
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-bg">
      <div className="container-fluid">
        <Link to="/" className="logo">
          ElektroGalaksi
        </Link>

        <div className="navbar-nav align-items-center d-lg-flex d-none">
          <NavLink to="/" className="nav-link">
            Əsas səhifə
          </NavLink>
          <NavLink to="/product" className="nav-link">
            Mağazamız
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Əlaqə
          </NavLink>
        </div>
        <div className="navbar-nav align-items-center  d-lg-flex d-none">
          <div className="nav-item">
            <div className="input-group desktop">
              <input
                type="text"
                className="form-control py-2"
                aria-describedby="basic-addon2"
                placeholder="Axtar"
              />
              <span className="input-group-text py-3" id="basic-addon2">
                <BsSearch className="fs-6" />
              </span>
            </div>
          </div>
          <li className="nav-item">
            <Link to="/compare" className="nav-link">
              <MdOutlineCompareArrows />
              Müqayisə
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/wishlist" className="nav-link">
              <FontAwesomeIcon icon={faHeart} style={{marginRight:'5px'}} />
              Bəyəndim
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <FontAwesomeIcon icon={faUser} />
              Daxil ol
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/basket-page" className="nav-link">
              <FontAwesomeIcon icon={faShoppingBasket} />
              Səbət
            </Link>
          </li>
          <div className="nav-item dropdown">
         


          </div>
        </div>
        <div onClick={() => SetIsMenuOpened(!isMenuOpened)} className='burger_menu d-lg-none text-white display-6' style={{cursor:'pointer'}}>
        <IoMenuOutline />
        </div>
      </div>

     { isMenuOpened && <div className='overlay' onClick={() => SetIsMenuOpened(false)}></div>}
      <div className={`responsive_menu ${isMenuOpened ? 'opened' : 'gone'}`}>
          <Link onClick={navigationHandler} to="/" className="logo">
            ElektroGalaksi
          </Link>
          <NavLink onClick={navigationHandler} to="/" className="nav-link">
            Əsas səhifə
          </NavLink>
          <NavLink onClick={navigationHandler} to="/product" className="nav-link">
            Mağazamız
          </NavLink>
          <NavLink onClick={navigationHandler} to="/contact" className="nav-link">
            Əlaqə
          </NavLink>
          {/* <div className="nav-item">
            <div className="input-group desktop">
              <input
                type="text"
                className="form-control py-2"
                aria-describedby="basic-addon2"
                placeholder="Axtar"
              />
              <span className="input-group-text py-3" id="basic-addon2">
                <BsSearch className="fs-6" />
              </span>
            </div>
          </div> */}
          <li className="nav-item">
            <Link onClick={navigationHandler} to="/compare" className="nav-link">
              <MdOutlineCompareArrows />
              Müqayisə
            </Link>
          </li>
          <li className="nav-item">
            <Link  onClick={navigationHandler} to="/wishlist" className="nav-link">
              <FontAwesomeIcon icon={faHeart} style={{marginRight:'5px'}} />
              Bəyəndim
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={navigationHandler} to="/login" className="nav-link">
              <FontAwesomeIcon icon={faUser} />
              Daxil ol
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={navigationHandler} to="/basket-page" className="nav-link">
              <FontAwesomeIcon icon={faShoppingBasket} />
              Səbət
            </Link>
          </li>
      </div>
    </nav>
  );
};

export default AppNavbar;
