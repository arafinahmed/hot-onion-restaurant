import React from 'react';
import HeadHome from '../HeadHome/HeadHome';
import BodyHome from '../BodyHome/BodyHome';
import SelectionButton from '../SelectionButton/SelectionButton';
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            
            <BodyHome></BodyHome>
            <SelectionButton></SelectionButton>
            <ChooseUs></ChooseUs>
            <Footer></Footer>         
        </div>
    );
};

export default Home;