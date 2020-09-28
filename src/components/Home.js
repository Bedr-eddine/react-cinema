import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


class Home extends React.Component {


    toSeries = ()=>{
        this.props.history.push('/series');
    };

    toMovies = ()=>{
        this.props.history.push('/movies');
    }
    render(){

        return(
      <div>
          <h2>Popular Titles</h2>
          <div className="home">
            <div onClick = {this.toSeries}>
                    <h3>Popular Series</h3>
                    <img src = "img/placeholder.png"></img>
            </div>
            <div onClick = {this.toMovies}>
                    <h3>Popular Films</h3>
                    <img src = "img/placeholder.png"></img>
                
            </div>
            
        </div>
      </div>      
        )
    }
}
export default Home;