import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
/* eslint-disable no-unused-expressions */

class Book extends Component{
    
 
    render() {
        console.log(this.props)
        let comp = this.props.books.map( (book) => {
            return <li key={book.id}> {book.id} - {book.title}({book.pages} pages)</li>
        })  
        return(
            
            <ul>
                {comp}
            </ul>

        );
    };
};

export default Book;