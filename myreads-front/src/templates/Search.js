import React, { Component } from 'react';
import {search} from '../BookApi';
import {Link} from 'react-router-dom';
import Book from './Book';
import Icon from 'react-materialize/lib/Icon';

class Search extends Component{
    
    state = {
        query: '',
        results: [],
        count: 0,
        message: <span>Type at least <b>3</b> letters</span>

    }

     debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    updateQuery = (query) => {
        let previousQuery = this.state.query;
        let text= "";
        this.setState({
            query: query
        })
        
        if( query.length >= 3 ){
            text = <span><b>{this.state.count}</b> Search results for <b>{query}</b></span>;

            if(previousQuery < query.length){
               
                this.clearSearch();
                this.setState({
                    message: text
                })
            }else{
                this.debounce(  this.fetchContent() , 1000);
                this.setState({
                    message: text
                })
            }
            
        }else{
            text = <span>Type at least <b>3</b> letters</span>;
            this.clearSearch();
            this.setState({
                message: text
            })
        }
    }
    
    
fetchContent(){
    
    this.clearSearch();
        search(this.state.query.trim()).then( books => {
           
            if (books.error === "empty query"){
                this.clearSearch();
                return 1;
            }else{
               books.map( book => {
                    if (!this.state.results.includes(book)){
                        this.setState({
                            results: [...this.state.results, book]
                        });
                    }
                   
                }); 
                this.setState({
                    count: books.length
                })
                return 0;
            }
            
            });
    
}

clearSearch(){
    this.setState({
        results: [],
        count: 0

    })
    console.log(this.state.results.length);
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
               {/* <nav>
                    <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                        <input id="search" type="search" value={this.state.query} onChange={event => this.updateQuery(event.target.value)} autofocus="true"  required></input>
                        <label className="label-icon" for="search"><img src={magGlass} className="icon-big" alt=""></img></label>
                        <Link to="/">
                            <img src={Cross} className="icon-big" alt=""></img>
                        </Link>
                        </div>
                    </form>
                    </div>
                </nav> */}
                
                <div className="search-header">
                    <Link to="/"><Icon>arrow_left</Icon>Go back Home</Link>
                    <h1>{this.state.message}</h1>
                </div>
                <div className="results">
                    <Book books={this.state.results}/>
                </div>
            </div>
        );
    }
}

export default Search