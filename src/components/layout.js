import React from "react"
import '../styles/style.scss';
import PropTypes from 'prop-types';
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from 'react-helmet';

export default function Layout ({metaAuth, metaDesc, title, canonicalUrl, children}){
    return (
        <>
            <Helmet>
                <html lang="en" />
                <meta charSet="utf-8" />
                <meta name="author" content={metaAuth} />
                <meta name="description" content={metaDesc} />
                <title>{title}</title>
                <link rel="canonical" href={canonicalUrl} />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Helmet>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
        
    )
}

Layout.propTypes = {
    children: PropTypes.array
  };