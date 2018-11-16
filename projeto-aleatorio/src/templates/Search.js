import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {search} from '../BookApi';
import Cross from '../res/icons/cross-out.png'
import magGlass from '../res/icons/loupe.png'
import Book from './Book';

class Search extends Component{
    
    state = {
        query: '',
        results: [],
        count: 0,
        message: <span>Type at least <b>3</b> letters</span>
    }

    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        })
        let text= "";
        if( this.state.query.length > 2){
            text = <span><b>{this.state.count}</b> Search results for <b>{this.state.query}</b></span>;
            this.fetchContent();
            this.setState({
                message: text
            })
        }else{
            text = <span>Type at least <b>3</b> letters</span>;
            this.setState({
                message: text
            })
        }
    }
    
    
componentDidUpdate(){
    
}
fetchContent(){
    
   
        search(this.state.query).then( books => {
            console.log(books);
            if (books.error == "empty query"){
                console.log('oops')
            }else{
               books.map( book => {
                    
                    this.setState({
                        results: [...this.state.results, book.title]
                    });
                }); 
            }
            
            });
    
}

    render(){
        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                        <input id="search" type="search" value={this.state.query} onChange={event => this.updateQuery(event.target.value)} autofocus="true" required></input>
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