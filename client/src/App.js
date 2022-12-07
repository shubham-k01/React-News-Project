
import './App.css';
import React from 'react'
import './components/Navbar'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import News from './components/News';

export default function App(){

  const apiKey = process.env.REACT_APP_API_KEY
  const pageSize = 5

  return (
      <>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<News key='gen' category='general' apiKey={apiKey} pageSize={pageSize} />} />
            <Route exact path='/gen' element={<News key='gen' category='general' apiKey={apiKey} pageSize={pageSize} />} />
            <Route exact path='/heal' element={<News key='heal' category='health' apiKey={apiKey} pageSize={pageSize}/>} />
            <Route exact path='/ent' element={<News key='ent' category='entertainment' apiKey={apiKey} pageSize={pageSize}/>} />
            <Route exact path='/sports' element={<News key='sports' category='sports' apiKey={apiKey} pageSize={pageSize}/>} />
            <Route exact path='/business' element={<News key='business' category='business' apiKey={apiKey} pageSize={pageSize}/>} />
            <Route exact path='/sci' element={<News key='sci' category='science' apiKey={apiKey} pageSize={pageSize}/>}  />
            <Route exact path='/tech' element={<News key='tech' category='technology' apiKey={apiKey} pageSize={pageSize}/>} />
            <Route exact path='/search/:st' element={<News key='st' category='st' apiKey={apiKey}/>} />
          </Routes>
        </Router>
        
      </>
    )
  }