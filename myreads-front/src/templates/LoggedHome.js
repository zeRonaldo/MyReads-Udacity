import React, { Component } from 'react';

import {getAll} from '../BookApi';

// Templates
import Header from './Header'
import FooterTemplate from './FooterTemplate'
import BookSection from './BookSection'
import { Row, Tab ,Col, Tabs} from 'react-materialize';
import {update} from '../BookApi';



class LoggedHome extends Component {
    state ={
        userName:"userName",
        userPoints: 100,
        userTag: "@usertag",
        books: [],
        arrayOfShelves : [
            {
                name: 'wantToRead',
                sectionName: 'Want To',
                tabTitle: 'Want To Read'
            },
            {
                name: 'read',
                sectionName: 'Read',
                tabTitle: 'Read'
            },
            {
                name: 'currentlyReading',
                sectionName: 'Reading',
                tabTitle: 'Reading'
            },
        ]
    }
    componentDidMount(){
        getAll().then( books => {
                books.map( book => {
                    this.setState({
                        books: [...this.state.books, book]
                    })
                });
        })
    }

    changeShelf = (event, book, shelf) =>{
        event.preventDefault();
        if(book.shelf !== shelf){
            let booksWithoutChange = this.state.books.filter( (value) => {
                return value !== book;
            });
            update(book, shelf).then( () => {
                book.shelf = shelf;
                booksWithoutChange.push(book);
                this.setState({
                    books: booksWithoutChange
                });
            });
        }
    }

    render() {

        return(
            <div className="home">
                
                <Header/>
                    <div className="container">
                        <Row className="home-header">
                            <Col s={12} m={6} className="center">
                                <img src="" className="profile-picture" alt=""></img>
                            </Col>
                            <Col s={12} m={6}>
                                <h1 className="greetings"> Hey, {this.state.userName}</h1>
                                
                                    <p>
                                        <b>{this.state.userTag}</b> - <b>{this.state.userPoints}</b> My Points
                                    </p>
                                
                            </Col>
                        </Row>
                        
                        <div className="content">
                            <Tabs >
                                {this.state.arrayOfShelves.map( shelf => (
                                    <Tab title={shelf.tabTitle} active>
                                        <BookSection sectionName={shelf.sectionName} books={this.state.books.filter( book => (book.shelf === shelf.name))} changeShelf={this.changeShelf} />
                                    </Tab>
                                ))}
                                
                               
                            </Tabs>
                            
                        </div>
                    </div>
                
                

                <FooterTemplate />
            </div>
            
        );
    };
}

export default LoggedHome;