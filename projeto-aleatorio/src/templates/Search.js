import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component{

    render(){
        return(
            <div>
                <h1>
                    Hello and welcome to the Search Page if you choose the:</h1> 
                   <p><Link to="/" className="blue">Blue</Link> you  go back to your bad and everything was a lie, a bad dream...</p> 
                   <p>But if you choose <Link to="/" className="red">Red</Link> you also go back, 'cause this project only have 2 pages</p>
                
                
            </div>
        );
    }
}

export default Search