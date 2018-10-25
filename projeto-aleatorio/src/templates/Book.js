import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
/* eslint-disable no-unused-expressions */

class Book extends Component{
    
    loadBooks = (books) => {
        books.map( (book) => {
           return <li key={book.id}> {book.id} - {book.title}({book.pages} pages)</li>
        })  
    }

    render() {
        return(
            
            <ul>
                {this.loadBooks(this.props.books)}
            </ul>

        );
    };
};

export default Book;