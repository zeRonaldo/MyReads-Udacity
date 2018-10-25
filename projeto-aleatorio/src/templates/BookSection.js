import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Book from './Book'

class BookSection extends Component {
    state = {
        books: [{
            id: 1,
            title : 'HP and something',
            pages : 389
        },
        {
            id: 2,
            title: 'whatevs',
            pages: 456
        },
        {
            id: 3,
            title: 'Dunno',
            pages: 180
        },
        {
            id: 4,
            title: 'Some big inteligent book full of smart words and shit',
            pages: 254
        }]

    }
    render() {
        return (
            <div><Book books={this.state.books}/></div>
        );
    }
}

export default BookSection;