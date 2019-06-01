import React, { Component } from 'react';
import Card from '../components/Card';
import { tsBooleanKeyword } from '@babel/types';

class Saved extends Component {
    state = {
        movieList: []    
};

render() {
    return (
        <React.Fragment>
            <Card title={movie.title} image={movie.image}/>
        </React.Fragment>
    )
}



}

export default Home;

