import React from "react"
import '../styles/style.scss';

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