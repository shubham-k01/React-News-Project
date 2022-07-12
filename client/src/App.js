
import './App.css';
import React, { Component } from 'react'
import './components/Navbar'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import News from './components/News';

export default class App extends Component {

  apiKey = process.env.REACT_APP_API_KEY
  pageSize = 5

  search = () =>{
    const a = document.getElementById('s1').value
    return <News key='search' search={a} apiKey={this.apiKey}/>
    // return <Search key='search' search={a} apiKey={this.apiKey}/>
}
  render() {
    return (
      <>
        <Router>
          <Navbar search={this.search} />
          <Routes>
            <Route exact path='/' element={<News key='gen' category='general' apiKey={this.apiKey} pageSize={this.pageSize} />} />
            <Route exact path='/gen' element={<News key='gen' category='general' apiKey={this.apiKey} pageSize={this.pageSize} />} />
            <Route exact path='/heal' element={<News key='heal' category='health' apiKey={this.apiKey} pageSize={this.pageSize}/>} />
            <Route exact path='/ent' element={<News key='ent' category='entertainment' apiKey={this.apiKey} pageSize={this.pageSize}/>} />
            <Route exact path='/sports' element={<News key='sports' category='sports' apiKey={this.apiKey} pageSize={this.pageSize}/>} />
            <Route exact path='/business' element={<News key='business' category='business' apiKey={this.apiKey} pageSize={this.pageSize}/>} />
            <Route exact path='/sci' element={<News key='sci' category='science' apiKey={this.apiKey} pageSize={this.pageSize}/>}  />
            <Route exact path='/tech' element={<News key='tech' category='technology' apiKey={this.apiKey} pageSize={this.pageSize}/>} />
            <Route exact path='/search' element={<News key='search' search='' apiKey={this.apiKey} pageSize={this.pageSize}/>}></Route> 
          </Routes>
        </Router>
        
      </>
    )
  }
}

// element={<News key='search' search='football' apiKey={this.apiKey}