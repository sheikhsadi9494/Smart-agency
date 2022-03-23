import React from 'react';
import Footer from '../../Shered/Footer/Footer';
import Navbar from '../../Shered/NavBar/Navbar';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const HomeContainer = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Experts></Experts>
            <Footer></Footer>
        </div>
    );
};

export default HomeContainer;
