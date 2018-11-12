import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Cross from '../res/icons/cross-out.png'
import magGlass from '../res/icons/loupe.png'

class Search extends Component{
    state = {
        query: '',
        results: [],
        count: 0
    }

    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        })
    }

    render(){
        return(
            <div>
               <nav>
                    <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                        <input id="search" type="search" value={this.state.query} onChange={event => this.updateQuery(event.target.value)} required></input>
                        <label className="label-icon" for="search"><img src={magGlass} className="icon-big" alt=""></img></label>
                        <Link to="/">
                            <img src={Cross} className="icon-big" alt=""></img>
                        </Link>
                        </div>
                    </form>
                    </div>
                </nav>
                
                <div className="search-header">
                    <h1><b>{this.state.count}</b> Search results for <b>{this.state.query}</b></h1>
                </div>
                <div className="results">
                    {this.state.results}
                </div>
            </div>
        );
    }
}

export default Search