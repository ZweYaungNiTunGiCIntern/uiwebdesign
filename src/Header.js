import React from 'react'
import "./Service.css"
import { Link } from 'react-router-dom';
export default function Header() {
  return (
        <nav class="navbar navbar-expand-lg navbar-light bg-secondry fixed-top straw">
        
            <div className="container">
                <a className="navbar-brand text-bold" href="#">Launch.</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/home" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/service" href="#">Feature</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Testinomiala</a></li>
                                <li><a className="dropdown-item" href="#">Menu 2</a></li>
                                
                                <li><a className="dropdown-item" href="#">Menu 3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/price" href="#">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" href="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/touch" href="#">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/feedback" href="#">Feedback</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div className="row justify-content-between">
                        <div className="col">
                        <button className="btn btn-sm rounded-5 btn-outline-dark">Sing in</button>
                        </div>
                        
                        <div className="col">
                        <button className="btn rounded-5 btn-sm btn-primary">Register</button>
                        </div>
                        </div>
                    
                    </form>
                </div>
            </div>
        </nav>
    
  )
}