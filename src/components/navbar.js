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
        <div className="container py-2">
          <div className="row">
            <div className="col-md-8">
              <a href="/" className="navbar-brand lora">
                <img src="/assets/VermontLogo-Green.svg" alt="" height="60px" width="auto" className="navbar-brand-logo"/> <span className="logo">Press</span>
              </a>              
            </div>
          </div>
        </div>       
      </header>
      <div className="nav-scroller py-1">
        <div className="container">
          <nav className="nav d-flex justify-content-between collapse">
            <Link to="/about" className="nav-link text-dark">
              About
            </Link>
            <a className="nav-link text-dark" href="https://fulcrum.org/vermont">Books</a>
            <a className="nav-link text-dark" href="https://jeed.pubpub.org/">Journals</a>
            <div className="dropdown show">
              <a className="nav-link text-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Publish with us
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="/publish-with-us">Publish with UVM Press</a>
                <a className="dropdown-item" href="/book-proposals">Book Proposals</a>                
                <a className="dropdown-item" href="/journal-proposals">Journal Proposals</a>
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
