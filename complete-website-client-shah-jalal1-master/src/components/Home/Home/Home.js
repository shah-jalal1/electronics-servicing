import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Footer from '../../shared/Footer/Footer';
import Review from '../Review/Review';
import ChooseUs from '../ChooseUs/ChooseUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ChooseUs></ChooseUs>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;