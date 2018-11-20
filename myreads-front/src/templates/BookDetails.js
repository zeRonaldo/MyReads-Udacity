import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Header from './Header';
import FooterTemplate from './FooterTemplate';
import {get} from '../BookApi';

class BookDetails extends Component {
    state={
        book: {}
    }
   componentDidMount(){
        get(this.props.match.params.id).then( result => {
            this.setState({
                book: result
            })
        });
        
   }
    render() {
       console.log(this.state.book);
       
        return (
            
            <div className="card book-details">
                <Header/>
                <div className="container row">
                    <div className="cover col s12 m4">
                        <img src={this.props.bookimg} className="book-cover" alt="Book Cover"></img>
                    </div>
                    <div className="info col s12 m8">
                    <div className="row">
                        <h2>{this.state.book.title}</h2>
                        <h3>{this.state.book.averageRating}</h3>
                    </div>
                    <div className="row">
                        <div className="authors">
                            {this.state.book.authors}
                        </div>
                        <div className="genre">
                            {this.state.book.categories}
                        </div>
                        <div className="publishers">
                            {this.state.book.publisher}
                        </div>
                        <div className="date">
                            {this.state.book.publishedDate}
                        </div>
                    </div>
                    <div className="row">
                        <div className="description">
                            {this.state.book.description}
                        </div>
                    </div>
                    
                    <div className="row">
                        <a href={this.state.book.previewLink} className="sm-btn button waves waves-light">Read a Preview</a>
                        <a href={this.state.book.canonicalVolumeLink} className="sm-btn button waves waves-light">Buy Now!</a>
                    </div>
                    </div>
                    
                </div>
                
                <FooterTemplate/>
            </div>
        );
    }
}

export default BookDetails;