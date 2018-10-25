import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Templates
import BookSection from './BookSection'

class Home extends Component {
    state = {
        
    }
    render() {
        return(
            <div>
                <header>
                
                </header>
                <BookSection />
                <Link to="/Search">Search Something!</Link>
            </div>
            
        );
    };
}

export default Home;