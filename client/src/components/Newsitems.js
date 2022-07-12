import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {
    return (
      <div style={{ width: '350px', margin: '15px' }}>
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',right:'0',position:'absolute'}}>
            <span className="  badge rounded-pill text-bg-danger">{this.props.source.name}</span>
          </div>
          <img src={this.props.urlToimg ? this.props.urlToimg : 'https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I='} className="card-img-top img-fluid" alt="Image for representation" />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.desc}</p>
            <p className="card-text text-danger">By {this.props.author ? this.props.author : 'Unknown'} on {this.props.published}</p>
            <a href={this.props.url} className="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
