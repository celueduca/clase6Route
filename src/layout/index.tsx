import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

const Layout = ({ children }: any) => {

    return (
        <>
           <Header />
           <main>
               { children }
           </main>
           <Footer />
        </>
    )
}

export default Layout
