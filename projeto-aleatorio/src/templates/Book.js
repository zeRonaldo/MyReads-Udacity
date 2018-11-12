import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* eslint-disable no-unused-expressions */

class Book extends Component{
    
 
    render() {
       
        let comp = this.props.books.map( (book) => {
            return <li key={book.id} className="book-mini">
                        <img src={book.imageLinks.thumbnail} className="cover"></img>
                        <h4>{book.title.substr(0, 30)}</h4>
                        <h5>{book.authors[0]} </h5>
                        <Link to={'/books/'+ book.id}>
                            + Detalhes
                        </Link>
                        
                    </li>
        })  
        return(
            
            <ul>
                {comp}
            </ul>

        );
    };
};

export default Book;