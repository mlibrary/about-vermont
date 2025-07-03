import React, {useState} from "react"
import {Link} from "gatsby"

const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
      <nav className="navbar navbar-expand-md navbar-light header-nav-container">
        <div className="container">
        <h1 id="logo" className="sr-only">University of Vermont Press</h1>
        <a className="navbar-brand" href="/">
          <img src="/assets/UVMPRESS_Horizontal_G.svg" alt="University of Vermont Press Logo" height="auto" width="170" className="navbar-brand-logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse roboto flex-row-reverse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button className="text-dark dropdown-menu-top-link dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                About
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/about">About Us</a>                
                <a className="dropdown-item" href="/contact">Contact Us</a>
              </div>
            </li>
            <li className="nav-item"><a className="nav-link text-dark" href="https://fulcrum.org/vermont">Books</a></li>
            <li className="nav-item"><a className="nav-link text-dark" href="/journals/">Journals</a></li>
            <li className="nav-item dropdown">
              <button className="text-dark dropdown-menu-top-link dropdown-toggle" id="dropdownMenuLink-2" data-toggle="dropdown" aria-expanded="false">
                Publish With Us
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/publish-with-us">Publishing Partnerships</a>
                <a className="dropdown-item" href="/book-proposals">Book Proposals</a>                
                <a className="dropdown-item" href="/journal-proposals">Journal Proposals</a>
              </div>
            </li>
            <li className="nav-item"><a className="nav-link text-dark" href="/support-uvm-press">Support</a></li>
          </ul>
        </div>
        </div>
      </nav>
  )
}

export default Navbar
