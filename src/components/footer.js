import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

export const titleQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}
`

const Footer = () => {
    const data = useStaticQuery(titleQuery)
    const {title} = data.site.siteMetadata
    const now = new Date()
    const year = now.getFullYear()

    return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 contact">
            <a href="/" className="block logo-link"><img src="/assets/VermontLogo.svg" alt="" height="60" width="auto" /><span className="logo">Press</span></a>
            <small className="mt-3 text-light d-block"><i>A division of University of Vermont Libraries</i><br />
            University of Vermont<br/>
            Howe Library | 538 Main St.<br />
            Burlington, VT 05405<br />
            802-656-2020</small>
            <small className="mb-2 text-light d-block"><a href="mailto:press@uvm.edu" className="text-light">press@uvm.edu</a></small>            
          </div>                    
          <div className="col-md-3">
            <span className="font-weight-bold">Friends of the UVM Press</span>
            <ul className="list-unstyled">
            <li><a href="https://www.uvm.edu/president" className="text-light">Office of the President</a></li>
              <li><a href="https://www.uvm.edu/provost" className="text-light">Office of the Provost</a></li>
              <li><a href="https://www.uvm.edu/ovpr" className="text-light">Office of the Vice President for Research</a></li>
              <li><a href="https://library.uvm.edu/" className="text-light">University of Vermont Libraries</a></li>
              <li><a href="https://www.ecoeng.org/" className="text-light">American Ecological Engineering Society</a></li>
              <li><a href="https://services.publishing.umich.edu/" className="text-light">Michigan Publishing Services</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled second-nav">
            <li><a href="/about" className="text-light">About</a></li>
              <li><a href="/news" className="text-light">News</a></li>
              <li><a href="/conferences" className="text-light">Conferences and Events</a></li>
              <li><a href="/book-proposals" className="text-light">Publish with Us</a></li> 
              <li><a href="/support-uvm-press" className="text-light">Support UVM Press</a></li>     
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
          <span className=" copyright text-light d-block mb-3 font-weight-normal">© {year}, University of Vermont Press · <a className="text-light" href="https://fulcrum.org/accessibility/">Accessibility</a> · <a className="text-light" href="https://fulcrum.org/preservation">Preservation</a> · <a className="text-light" href="https://fulcrum.org/privacy">Privacy</a> · <a className="text-light" href="https://fulcrum.org/terms">Terms</a></span>
          </div>
          <div className="col-md-4 text-right">
            <small className="text-white">Powered by</small> <a href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
