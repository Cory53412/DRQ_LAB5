import React from 'react';//imported when class extended
import Card from 'react-bootstrap/Card';
export class MovieItem extends React.Component { //extending react class Component

    render() {
        return (
            <div>
                {/*Added read component  */}
                {/* Embedded movie component in read component */}
                {/*Then Passed data from read component using our state obkect  */}


                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">

                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <h4>{this.props.movie.Year}</h4>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>



            </div >
        );
    }
}