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
            return authorChip;
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
    
    printShelfSelector = ( selected, book) => {
       
        if ((typeof selected !== 'undefined') && (book.shelf !== 'none')){
            switch (book.shelf){
                case 'read':
                return <Dropdown trigger={
                    <Button>Move to</Button>
                }>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event, book, "read")}} className="current-shelf">Read</NavItem>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event,book, "currentlyReading")}} >Reading</NavItem>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event, book, "wantToRead")}}>Want to Read</NavItem>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event, book, "none")}}>Remove Book</NavItem>
                </Dropdown>;
                case 'currentlyReading':
                return <Dropdown trigger={
                    <Button>Move to</Button>
                }>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event, book, "read")}}>Read</NavItem>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event,book, "currentlyReading")}} className="current-shelf">Reading</NavItem>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event, book, "wantToRead")}}>Want to Read</NavItem>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event, book, "none")}}>Remove Book</NavItem>
                </Dropdown>;
                case 'wantToRead':
                return <Dropdown trigger={
                    <Button>Move to</Button>
                }>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event, book, "read")}}>Read</NavItem>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event,book, "currentlyReading")}}>Reading</NavItem>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event, book, "wantToRead")}} className="current-shelf" >Want to Read</NavItem>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event, book, "none")}}>Remove Book</NavItem>
                </Dropdown>;
                default:
                return <Dropdown trigger={
                    <Button>Move to</Button>
                }>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event, book, "read")}}>Read</NavItem>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event,book, "currentlyReading")}}>Reading</NavItem>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event, book, "wantToRead")}}>Want to Read</NavItem>
                    <NavItem onClick={ (event) => {this.props.changeShelf(event, book, "none")}}>Remove Book</NavItem>
                </Dropdown>;
            }
                
                
        }else{
           return <Dropdown trigger={
                <Button>Put on myShelves</Button>
            }>
                <NavItem onClick={ (event) => {this.props.changeShelf(event,book, "read")}}>Read</NavItem>
                <NavItem onClick={ (event) => {this.props.changeShelf(event,book, "currentlyReading")}}>Reading</NavItem>
                <NavItem onClick={ (event) => {this.props.changeShelf(event, book, "wantToRead")}}>Want to Read</NavItem>
                
            </Dropdown>;
        }
    }

   
    
    render() {
      
       
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
                    {this.printShelfSelector( book.shelf, book)}
                </div>
                <div  className="center">
                <Link to={'/books/'+ book.id}>
                                <Button >More.. </Button>
                            </Link>
                </div>
             </div>;
          

        
           let cover = book.imageLinks ? <img src={book.imageLinks.thumbnail} className="cover" alt=""></img> : <div className="no-cover"><img src={Logo} alt=""></img><p>No cover available for this book </p> </div>;
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