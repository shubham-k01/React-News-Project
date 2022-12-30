import React ,{useRef} from 'react'
import {Link , useNavigate } from 'react-router-dom'
import './Newsitems.js'
import newsLogo from '../newsLogo.png'
// import News from './News.js'
// import Search from './Search.js'


export default function Navbar(){
    const first = useRef(null)
    const navigation = useNavigate()

    const handleClick = async(e)=>{
        navigation(`/search/${first.current.value}`)
    }
    return(
        <>
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark" style={{width:'100w'}}>
            <div className="container-fluid justify-content-center">
                <Link className="navbar-brand " to="/">
                    <img src={newsLogo} alt="" width='120px' height='45px'/>
                </Link>
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
                    <form className="d-flex" role="search">
                        <input id="s1" className="form-control me-2" type="search" ref={first}  placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit" onClick={handleClick}>Search</button>
                    </form>
                </div>
            </div>

        </nav>
        </>
        )
}

