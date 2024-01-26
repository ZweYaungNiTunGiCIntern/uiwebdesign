import React from 'react'

export default function Header() {
  return (
        <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top">
        
            <div className="container">
                <a className="navbar-brand text-bold" href="#">Launch.</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Feature</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Testinomiala</a></li>
                                <li><a className="dropdown-item" href="#">Menu 2</a></li>
                                
                                <li><a className="dropdown-item" href="#">Menu 3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
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