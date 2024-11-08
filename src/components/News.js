import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
        country:'us',
        pageSize:5,
        category:'general'
    }
    static dpropTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
     capitalizeFrstLetter=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }
    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1
        }
        document.title=`${this.capitalizeFrstLetter(this.props.category)}-DeshDarpan`;
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json()
        this.setState({articles :parsedData.articles,totalResults:parsedData.totalResults,
            loading:false
        })
    }

    handlePrevClick= async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data= await fetch(url);
        let parsedData= await data.json()
        this.setState({
            page:this.state.page - 1,
            articles:parsedData.articles,
            loading:false
        })
    }
    handleNextClick= async ()=>{
        if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        let parsedData= await data.json()
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles,
            loading:false
        })
    }}
  render() {
    return (
      
        <div className="container" style={{background:'#494848'}}>
            <h1 className="text-center mybox font-weight-bolder" style={{margin:'25px 0px',marginTop:'60px',color:'white',fontSize:'6rem',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>DeshDarpan</h1><hr/>
            <h1 className="text-center" style={{marginTop:'20px',color:'white',fontSize:'2rem',textShadow: '2px 2px 4px rgba(0, 0, 139, 0.8)'}}>Top Headlines from {this.capitalizeFrstLetter(this.props.category)} Category</h1>
            {this.state.loading &&<Spinner/>}
            <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}><NewsItem title={element.title?element.title:""}   description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                </div>
                })}
                
            </div>
            <div className="container my-3 d-flex  justify-content-between ">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>

            </div>

        </div>
      
    )
  }
}

export default News
