import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Templates
import Header from './Header'
import BookSection from './BookSection'
import SplashHome from './SplashHome';
import LoggedHome from './LoggedHome';

class Home extends Component {
    state = {
        
    }
    render() {
        return(
            <div>
                {/* <Header />
                <BookSection title="Lendo" />
                <BookSection title="Lidos" />
                <BookSection title="Lendo" />
                <Link to="/Search">Search Something!</Link> 
                <SplashHome/>*/}
                <LoggedHome></LoggedHome>
            </div>
            
        );
    };
}

export default Home;