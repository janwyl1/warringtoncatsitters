import React from "react"
import '../styles/style.scss';
import PropTypes from 'prop-types';
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout ({children}){
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
        
    )
}

Layout.PropTypes = {
    children: PropTypes.object
  };