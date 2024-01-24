import React from 'react'

export default function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-light justify-content-center">
        <div className="container">
            <a className="navbar-brand text-bold" href="#">Launch.</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Feature</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Testinomiala</a></li>
                        <li><a class="dropdown-item" href="#">Menu 2</a></li>
                        
                        <li><a class="dropdown-item" href="#">Menu 3</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <div className="row justify-content-between">
                    <div className="col">
                    <button class="btn btn-sm rounded-5 btn-outline-dark">Sing in</button>
                    </div>
                    
                    <div className="col">
                    <button class="btn rounded-5 btn-sm btn-primary">Register</button>
                    </div>
                    </div>
                   
                </form>
            </div>
        </div>
</nav>
</div>
  )
}
