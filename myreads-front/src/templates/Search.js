import React, { Component } from 'react';
import {search} from '../BookApi';
import {Link} from 'react-router-dom';
import Book from './Book';
import Icon from 'react-materialize/lib/Icon';
import _ from 'lodash'
import {update, getAll} from '../BookApi';

class Search extends Component{
    
    state = {
        query: '',
        results: [],
        count: 0,
        message: <span>Type at least <b>3</b> letters</span>,
        books: []
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

    updateQuery = (query) => {
        let previousQuery = this.state.query;
        let text= "";
        this.setState({
            query: query
        })
        
        if( query.length >= 3 ){
            

            if(previousQuery < query.length){
               
                this.clearSearch();
               
            }else{
                this.fetchContent()
                
            }
            
        }else{
            text = <span>Type at least <b>3</b> letters</span>;
            this.clearSearch();
            this.setState({
                message: text
            })
        }
    }
    
    
fetchContent = () => {
    
    this.clearSearch();
      search(this.state.query.trim()).then( books => {
           
            if (books.error === "empty query"){
                this.clearSearch();
            }else{
            this.clearSearch();
               books.map( book => {
                
                    if (!this.state.results.includes(book)){
                        this.setState({
                            count: books.length,
                            results: [...this.state.results, book]
                        });
                        let text = <span><b>{this.state.count}</b> Search results for <b>{this.state.query}</b></span>;
                        this.setState({
                            message: text
                        })
                    }
                   
                }); 
              
               
                return 0;
            }
            
            });
    
}

clearSearch = () => {
    this.setState({
        results: [],
        count: 0

    })
    
}

changeShelf = (event, book, shelf) =>{
    event.preventDefault();
    
    if(book.shelf !== shelf){
        let booksWithoutChange = this.state.results.filter( (value) => {
        return value !== book;
    });
 
        update(book, shelf).then(() => {
            book.shelf = shelf;
            this.setState({
                    results: booksWithoutChange
                }
            )
            window.Materialize.toast(book.title+' added to '+shelf, 10000)
        });

        
    }
}


    render(){
        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                        <input id="search" type="search" value={this.state.query} onChange={event => this.updateQuery(event.target.value) } autofocus="true" required></input>
                        <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                        </div>
                    </form>
                    </div>
                </nav>
              
                <div className="search-header">
                    <Link to="/" className="back-home"><Icon>arrow_left</Icon>Go back Home</Link>
                    <h1>{this.state.message}</h1>
                </div>
                <div className="results">
                    <Book books={this.state.results} changeShelf={this.changeShelf}/>
                </div>
            </div>
        );
    }
}

export default Search