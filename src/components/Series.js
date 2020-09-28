import React from 'react'

class Series extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            series:[],
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
            response.map((s)=>{
                if(s.category=="Serie"){
                    data.push(s);
                }
            })
        this.setState({series: data, loading:false})})
    }
    render(){
        let display = "";
        let items = <div className='items-container'>
        {this.state.series.slice(0,21).map((serie, i)=>{
            if(this.state.loading){return }
            else{
                if(serie.category == "Serie" && serie.releaseYear >= 2010){
                    return <div className='item'><img src={serie.images.url}></img><h3>{serie.title}</h3></div>
                    }
            }
        })}; </div>
        if(this.state.error){display = <h3>Ooops something went wrong</h3>}
        else{
            this.state.loading ? display = <h3>Loading...</h3> : display = items;
        }
        return(
        <div>
            <h2>Popular Series</h2>
             {display}
            </div>
        )
    }
}
export default Series;