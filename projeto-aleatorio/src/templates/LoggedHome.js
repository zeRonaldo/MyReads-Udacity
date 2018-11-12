import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getAll} from '../BookApi';

// Templates
import Header from './Header'
import Footer from './Footer'
import BookSection from './BookSection'



class LoggedHome extends Component {
    state ={
        userName:"José Ronaldo",
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

    render() {
        return(
            <div className="home">
                
                <Header/>
                <div className="main-header-user">
                    <div className="bg-gradient">
                        <h1> Olá, {this.state.userName}</h1>
                        <h5><b>{this.state.userPoints}</b> My Points</h5>
                        <img src="" className="profile-picture"></img>
                    </div>
                </div>
                <div className="content">
                    <BookSection sectionName="Lendo" books={this.state.readingShelf} />
                    <BookSection sectionName="Lidos" books={this.state.readShelf} />
                    <BookSection sectionName="Quero Ler" books={this.state.wantToShelf} />
                </div>
                

                <Footer />
            </div>
            
        );
    };
}

export default LoggedHome;