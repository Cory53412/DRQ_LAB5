import React from 'react';
//imported when class extended
import { Movies } from './movies';
import axios from 'axios';//retrives information

export class Read extends React.Component { //extending react class Component
//empty array to store all movies
    state = {
        movies: []

    };
    //when component is visible in webpage, runs this method
    componentDidMount() {
        // gets json data for movies
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then((response) => {
                this.setState({ movies: response.data.Search })//updates movies with array with retrived data
            })
            .catch((error) => {
                console.log(error)//logs error to console
            }
            );
    }


    render() {
        return (
            <div>
                <h1>Hello from read component</h1>
                {/* //heading is displayed on Footer component */}

                {/* Create object where info is passed from movies*/}
                <Movies movies={this.state.movies} ></Movies>
            </div>


        );
    }
}