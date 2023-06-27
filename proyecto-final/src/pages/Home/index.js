import React from 'react';
import List from '../../components/List';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Carousel1 from '../../components/Carousel1';


const Home = () => {
    return (
        <>
            <Header />
            <Carousel1 />
            <h1>PRODUCTOS DESTACADOS!</h1>
            <List />
            <Footer />
        </>
    )
}

export default Home;