// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/product';
import Profile from './Pages/profile';
import Gallery from './Pages/gallery';
import Enquiry from './Pages/enquiry';
import Contact from './Pages/contact';
import { ProductDetails1, ProductDetails2, ProductDetails3, ProductDetails4, ProductDetails5, ProductDetails6, } from './Pages/Productdetails';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/enquiry" element={<Enquiry />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/productdetails1' element={<ProductDetails1 />} />
                <Route path='/productdetails2' element={<ProductDetails2 />} />
                <Route path='/productdetails3' element={<ProductDetails3 />} />
                <Route path='/productdetails4' element={<ProductDetails4 />} />
                <Route path='/productdetails5' element={<ProductDetails5 />} />
                <Route path='/productdetails6' element={<ProductDetails6 />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
