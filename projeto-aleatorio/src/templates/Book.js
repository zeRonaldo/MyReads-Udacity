import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Col, Card, CardTitle, Chip, Icon, Dropdown, Button, NavItem, Toast} from 'react-materialize'

import {update} from '../BookApi';
/* eslint-disable no-unused-expressions */

class Book extends Component{
    state = {
        changed: 'nope',
        details: {}
    }
    printRating = (rate) => {
        let stars = [];
        let i = 0;

        if (typeof rate != 'undefined'){
        if (rate % 1 != 0){
            for(i ; i < rate-1; i ++ ){
                stars.push( <Icon>star</Icon>) ;
            }
            stars.push(<Icon>star_half</Icon>);
            
            
        }else{
            for(i ; i < rate-1; i ++ ){
                stars.push(<Icon>star</Icon>);
            }
        }
      }
        let result = <div>
            {stars}
        </div>;
        return result;
        
    }
    printAuthors = (authors) => {
        let authorChip = [];
        authors.map(author => {
            authorChip.push( <Chip>{author}</Chip> );
        });

        let result = <div>
        {authorChip}
        </div>;
        return result;
    }

    printYear = (datePub) => {

        let result = new Date(datePub);

        return result.getFullYear();
    }
    
    printShelfSelector = (index, selected, book) => {
        if (typeof selected != 'undefined'){
                return <Dropdown trigger={
                    <Button>Move to</Button>
                }>
                    <NavItem onClick={ (event) => {this.changeShelf(event,index, book, "read")}}>Read</NavItem>
                    <NavItem onClick={ (event) => {this.changeShelf(event,index,book, "currentlyReading")}}>Reading</NavItem>
                    <NavItem onClick={ (event) => {this.changeShelf(event,index, book, "wantToRead")}}>Want to Read</NavItem>
                </Dropdown>;
                
        }else{
           return <Dropdown trigger={
                <Button>Put on myShelves</Button>
            }>
                <NavItem onClick={ (event) => {this.changeShelf(event,index,book, "read")}}>Read</NavItem>
                <NavItem onClick={ (event) => {this.changeShelf(event,index,book, "currentlyReading")}}>Reading</NavItem>
                <NavItem onClick={ (event) => {this.changeShelf(event,index, book, "wantToRead")}}>Want to Read</NavItem>
            </Dropdown>;
        }
    }

    changeShelf (event,index, book, shelf) {
        event.preventDefault();
        let bookid = {
            id: book.id
        }
        update(bookid,shelf).then( () => {
            this.props.books[index].shelf = shelf;
            console.log(this.props.books[index]);

        });
        
    }
    
    render() {
       console.log(this.state.changed);
       let index = 0;
        let comp = this.props.books.map( (book) => {
            
            let content = <div>
                <div className="center">
                    <b>{book.title}{' - '+book.subtitle}</b>
                    {this.printRating(book.averageRating)}
                </div>
                <div className="book-authors">
                    Author: <div>
                        {this.printAuthors(book.authors)}
                    </div>
                </div>
                <div className="book-genre">
                    Genre: <Chip>{book.categories}</Chip>
                </div>
                <div>
                    Year: {this.printYear(book.publishedDate)}
                </div>
                <div className="center">
                    {this.printShelfSelector(index, book.shelf, book)}
                    <p></p>
                            <Link to={'/books/'+ book.id}>
                                <Button >More.. </Button>
                            </Link>
                </div>
             </div>;
             index++

        //    return <Col s={12} m={4} l={3} className="book-mini">
                
        //         {/* <Card header={<CardTitle reveal image={book.imageLinks.thumbnail} waves='light'/>}
        //             title={book.title.substr(0,30)}
        //             reveal={content}>
        //             <p><Link to={'/books/' + book.id} >More details</Link></p>
        //         </Card> */}
        //     </Col>
           
            return <li key={book.id} className="book-mini">
                        <div className="front">
                            <img src={book.imageLinks.thumbnail} className="cover"></img>
                                                    
                        </div>
                        <div className="back"> 
                            {content}
                            
                        </div>
                        
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