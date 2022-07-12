import React, { Component } from 'react'
import News from './News'
import { Link, Route ,Routes } from 'react-router-dom'

export default class Search extends Component {
  
  constructor(){
    super()
    this.state={
      search : ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  updateQuery = async ()=>{
    console.log(this.state.search)

    // const url = `https://newsapi.org/v2/everything?q=${a}&apiKey=${this.props.apiKey}`
    // const data = await fetch(url)
    // const parsedData = await data.json()
    // <Navigate  to={<News key='search' search=`${a}` apiKey={this.apiKey} pageSize={this.pageSize}/>}> 
    
    // <News key='search' search={this.state.search} apiKey={this.apiKey} pageSize={}/>
  }
  
  handleChange = (e)=>{
      this.setState({search : e.target.value})
  }

  render() {
    return (
      <>
      <Routes>
            <Route to='search' element={<News key='search' search={this.state.search} apiKey={this.apiKey}/>}/>
      </Routes>
        <form className="d-flex" role="search">
          <input id="s1" className="form-control me-2" value={this.state.search} type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange}/>
          <button className="btn btn-outline-success" type="submit" onClick={this.updateQuery}><Link to='/search'>Search</Link></button>
        </form>
      </>

    )
  }
}
