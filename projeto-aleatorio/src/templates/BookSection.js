import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Book from './Book'

class BookSection extends Component {
   
    render() {
       
        return (
            
            <div className="book-section">
                <Book books={this.props.books}/>                 
            </div>
        );
    }
}

export default BookSection;