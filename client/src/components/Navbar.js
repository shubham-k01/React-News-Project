import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Newsitems.js'
// import Search from './Search.js'
// import News from './News.js'


export default class Navbar extends Component {
    
    render() {
        return (
            <>
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark" style={{width:'100w'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">PrimeNews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/gen">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/heal">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sci">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tech">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ent">Entertainment</Link>
                            </li>

                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input id="s1" className="form-control me-2" type="search"   placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit" onClick={this.props.search}><Link to='/search'>Search</Link></button>
                        </form> */}
                        {/* <Search/> */}
                    </div>
                </div>

            </nav>
            </>
        )
    }
}
