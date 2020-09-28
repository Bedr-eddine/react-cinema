import React from 'react'

class Movies extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            films:[],
            loading: true,
            error: false
        }
    }
    componentDidMount(){
        fetch('donnees.json')
        .then((response)=>{
            if (!response.ok){this.setState({error:true})};
            return response.json()})
        .then((response)=>{ 
            let data = [];
            response.map((f)=>{
                if(f.category == "Movie"){
                    data.push(f);
                }
            })
        this.setState({films: data, loading: false})})
    }

    render(){
        let display = "";
        let items = <div className="items-container">
        {this.state.films.slice(0,21).map((film, i)=>{
            if(film.category == "Movie" && film.releaseYear >= 2010){
            return <div className="item"><img src={film.images.url}></img><h3>{film.title}</h3></div>
            }
        })}
        </div>;
        
        if(this.state.error){display = <h3>Ooops something went wrong</h3>}
        else{
            this.state.loading ? display = <h3>Loading...</h3> : display = items;
        }
        
        return(
        <div>
            <h2>Popular Movies</h2>
            {display}
        </div>)
    }
}
export default Movies;