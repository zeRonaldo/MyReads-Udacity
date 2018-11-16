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
                
                {/* <SplashHome/> */}
                <LoggedHome/>
            </div>
            
        );
    };
}

export default Home;