import React from 'react';
import Header from '../header-footer/header';
import Footer from '../header-footer/footer';

const Layout = (props) => {
    return (
        <div>
            <Header/>
                {props.children}
            <Footer/>
        </div>
    )
}

//teste de commit

export default Layout;