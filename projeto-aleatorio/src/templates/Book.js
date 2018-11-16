import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Col, Card, CardTitle, Chip, Icon} from 'react-materialize'
import Row from 'react-materialize/lib/Row';
/* eslint-disable no-unused-expressions */

class Book extends Component{
    printRating(rate){
        let stars ;
        let i = 0;
        
        if (rate % 1 != 0){
            for(i ; i == rate; i ++ ){
                stars += <Icon>star</Icon>;
            }
            stars += <Icon>half_star</Icon>;
            return stars;
        }else{
            for(i ; i == rate; i ++ ){
                stars += <Icon>star</Icon>;
            }
            return stars;
        }
    }
    printAuthors (authors){
        let authorChip;
        authors.forEach(author => {
            authorChip = <Chip>{authors}</Chip>
        });
        return authorChip;
        
    }
    render() {
       
        let comp = this.props.books.map( (book) => {
            let content = <Row>
                <Row>
                    {this.printRating(book.averageRating)}
                </Row>
                <Row className="book-authors">
                    Author: {this.printAuthors(book.authors)}
                </Row>
                <Row className="book-genre">
                    Genre: <Chip>{book.categories}</Chip>
                </Row>

             </Row>;

           return <Col s={12} m={4} l={3}>
                <Card header={<CardTitle reveal image={book.imageLinks.thumbnail} waves='light'/>}
                    title={book.title.substr(0,30)}
                    reveal={content}>
                    <p><Link to={'/books/' + book.id} >More details</Link></p>
                </Card>
            </Col>
           
            // return <li key={book.id} className="book-mini">
            //             <img src={book.imageLinks.thumbnail} className="cover"></img>
            //             <h4>{book.title.substr(0, 30)}</h4>
            //             <h5>{book.authors[0]} </h5>
            //             <Link to={'/books/'+ book.id}>
            //                 + Detalhes
            //             </Link>
                        
            //         </li>
        })  
        return(
            
            <ul>
                {comp}
            </ul>

        );
    };
};
 
export default Book;