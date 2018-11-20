import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Chip, Icon, Dropdown, Button, NavItem} from 'react-materialize'
import Logo from './../res/icons/logo.png';

/* eslint-disable no-unused-expressions */

class Book extends Component{
    state = {
        changed: 'nope',
        details: {}
    }
    
    printRating = (rate) => {
        let stars = [];
        let i = 0;

        if (typeof rate !== 'undefined'){
        if (rate % 1 !== 0){
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
        if(typeof authors !== 'undefined'){
            authors.map(author => {
            authorChip.push( <Chip>{author}</Chip> );
            }); 
        }else{
            authorChip.push( <Chip>No Author info</Chip> );
        }
       

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
        if (typeof selected !== 'undefined'){
                return <Dropdown trigger={
                    <Button>Move to</Button>
                }>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event,index, book, "read")}}>Read</NavItem>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event,index,book, "currentlyReading")}}>Reading</NavItem>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event,index, book, "wantToRead")}}>Want to Read</NavItem>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event,index, book, "")}}>Remove Book</NavItem>
                </Dropdown>;
                
        }else{
           return <Dropdown trigger={
                <Button>Put on myShelves</Button>
            }>
                <NavItem onClick={ (event) => {this.props.changeShelf(event,index,book, "read")}}>Read</NavItem>
                <NavItem onClick={ (event) => {this.props.changeShelf(event,index,book, "currentlyReading")}}>Reading</NavItem>
                <NavItem onClick={ (event) => {this.props.changeShelf(event,index, book, "wantToRead")}}>Want to Read</NavItem>
                
            </Dropdown>;
        }
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

        
           let cover = book.imageLinks ? <img src={book.imageLinks.thumbnail} className="cover" alt=""></img> : <img src={Logo} className="cover" alt=""></img>;
            return <li key={book.id} className="book-mini">
                        <div className="front">

                           {cover}
                                                    
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