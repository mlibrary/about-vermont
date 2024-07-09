import React, {useState} from "react"
import {Link} from "gatsby"

const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <div className="header-nav-container navbar-dark">    
      <header>
        <div className="container py-3">
          <div className="row">
            <div className="col-md-8">
              <a href="/" className="navbar-brand">
                <img src="/assets/VermontLogo.svg" alt="" height="75px" width="auto" className="navbar-brand-logo"/>
              </a>              
            </div>
          </div>
        </div>       
      </header>
      <div className="nav-scroller">
        <div className="container">
          <nav className="nav d-flex justify-content-between collapse">
            <Link to="/about" className="nav-link text-dark">
              About
            </Link>
            <a className="nav-link text-dark" href="https://fulcrum.org/vermont">Books</a>
            <a className="nav-link text-dark" href="https://journals.press.vermont.edu/journals">Journals</a>
            <div className="dropdown show">
              <a className="nav-link text-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Publish with us
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="/proposal-books">Book Proposals</a>                
                <a className="dropdown-item" href="/proposal-journals">Journals Proposals</a>
              </div>
            </div>
            <a className="nav-link text-dark" href="/contact">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
