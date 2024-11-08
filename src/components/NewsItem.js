import React, { Component } from 'react'
import './Newsitem.css'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div className="my-3">
        <div className="card" >
  <img src={!imageUrl?"https://d32r1sh890xpii.cloudfront.net/article/718x300/2024-10-04_i0azmzfg76.jpg":imageUrl} className="card-img-top" alt="..." />
  <div className="card-body" style={{background:'rgba(var(--bs-dark-rgb))',color:'white'}}>
    <h5 className="card-title" >{title}</h5><hr/>
    <p className="card-text" >{description}</p>
    <p className='card-text' ><small className="text-muted" style={{color:'white'}}>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
