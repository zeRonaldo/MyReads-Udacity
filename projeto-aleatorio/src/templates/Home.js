import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Templates
import BookSection from './BookSection'

class Home extends Component {
    render() {
        return(
            <div>
                <h1>Hello World!</h1>
                <BookSection />
                <Link to="/Search">Search Something!</Link>
            </div>
            
        );
    };
}

export default Home;