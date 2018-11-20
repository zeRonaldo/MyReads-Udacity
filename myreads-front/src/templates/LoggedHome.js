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
        readingShelf: [],
        readShelf:[],
        noShelf:[],
        wantToShelf: []
    }
    componentDidMount(){
        getAll().then( books => {
                books.map( book => {
                    console.log(book);
                    if(book.shelf === 'currentlyReading'){
                        this.setState({
                            readingShelf: [...this.state.readingShelf, book]
                        });
                    }else if (book.shelf === 'read'){
                        this.setState({
                            readShelf: [...this.state.readShelf, book]
                        });
                    }else if(book.shelf === 'wantToRead'){
                        this.setState({
                            wantToShelf: [...this.state.wantToShelf, book]
                        });
                    }else{
                        this.setState({
                            noShelf: [...this.state.noShelf, book]
                        })
                    };
                });
        })
    }

    changeShelf (event,index, book, shelf) {
        event.preventDefault();
        if(book.shelf !== shelf){
            let bookid = {
                id: book.id,
                shelf: book.shelf
            }
            update(bookid,shelf).then( () => {
                switch(bookid.shelf){
                    case 'reading':
                        this.setState({
                            readingShelf: this.state.readingShelf.filter( (value) => {
                                return value !== book;
                            })
                        })
                        break
                    case 'read':
                        this.setState({
                            readingShelf: this.state.readShelf.filter( (value) => {
                                return value !== book;
                            })
                        })
                        break
                    case 'wantToRead':
                        this.setState({
                            readingShelf: this.state.wantToShelf.filter( (value) => {
                                return value !== book;
                            })
                        })
                        break
                    default:
                        break
                   
                        
                }
                switch(shelf){
                    case 'reading':
                        this.setState({
                            readingShelf: [...this.state.readingShelf, book] });
                        break
                    case 'read':
                        this.setState({
                            readingShelf: [...this.state.readShelf, book] });
                        break
                    case 'wantToRead':
                        this.setState({
                            readingShelf: [...this.state.wantToShelf, book] });
                        break
                    default:
                        break 
                    
                }

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
                                <Tab title="Reading" active>
                                    <BookSection sectionName="Lendo" books={this.state.readingShelf} updateShelf={this.changeShelf} />
                                </Tab>
                                <Tab title="Read">
                                    <BookSection sectionName="Lidos" books={this.state.readShelf} updateShelf={this.changeShelf} />
                                </Tab>
                                <Tab title="Want To Read">
                                    <BookSection sectionName="Quero Ler" books={this.state.wantToShelf} updateShelf={this.changeShelf} />
                                </Tab>
                            </Tabs>
                            
                        </div>
                    </div>
                
                

                <FooterTemplate />
            </div>
            
        );
    };
}

export default LoggedHome;