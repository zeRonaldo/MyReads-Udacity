import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Header from './Header';
import FooterTemplate from './FooterTemplate';
import {get} from '../BookApi';
import { Chip, Icon, Button} from 'react-materialize'
import Logo from './../res/icons/logo.png';

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
   printRating = (rate) => {
    let stars = [];
    let i = 1;

    if (typeof rate !== 'undefined'){
        for(i ; i < rate; i ++ ){
            stars.push( <Icon>star</Icon>) ;
        }
        if (rate % 1 !== 0){
            stars.push(<Icon>star_half</Icon>);        
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
    render() {
       
       let cover = this.state.book.imageLinks ? <img src={this.state.book.imageLinks.thumbnail} className="cover" alt=""></img> : <img src={Logo} className="cover" alt=""></img>;
        return (
            
            <div className="book-details">
                <Header/>
                <div className=" container row">
                    <div className="card row z-depth-1">
                        <div className="cover col s12 m4">
                            {cover}
                        </div>
                        <div className="info col s12 m8">
                        <div className="row">
                            <h2>{this.state.book.title}</h2>
                            <h3>{this.printRating(this.state.book.rate)}</h3>
                        </div>
                        <div className="row">
                            <div className="authors">
                                {this.printAuthors(this.state.book.authors)}
                            </div>
                            <div className="genre">
                                {this.state.book.categories}
                            </div>
                            <div className="publishers">
                                {this.state.book.publisher}
                            </div>
                            <div className="date">
                                {this.printYear(this.state.book.publishedDate)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="description">
                                {this.state.book.description}
                            </div>
                        </div>
                        
                        <div className="row detail-links">
                            <Button> <a href={this.state.book.previewLink} >Read a Preview</a></Button>
                            <Button> <a href={this.state.book.canonicalVolumeLink} >Buy Now!</a></Button>
                        </div>
                        </div>
                    </div>
                    
                    
                </div>
                
                <FooterTemplate/>
            </div>
        );
    }
}

export default BookDetails;