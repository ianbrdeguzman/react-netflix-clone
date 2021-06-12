import React from 'react';
import BrowseHeader from '../header/BrowseHeader';
import Footer from '../footer/Footer';

const Layout = ({ children, browse }) => {
    return (
        <div>
            <BrowseHeader />
            {children}
            <Footer browse={browse} />
        </div>
    );
};

export default Layout;
