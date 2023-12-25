import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import '../Responsive.css'
const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout