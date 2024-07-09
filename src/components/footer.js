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
            <a href="/" className="text-light mb-2 scala-sans"><img src="/assets/VermontLogo.svg" alt="" height="100" width="auto" className="block" /><span className="sr-only">Amherst College Press</span></a>
            <small className="text-light d-block">Burlington, VT</small>            
          </div>                    
          <div className="col-md-3">
            <ul className="list-unstyled text-small">
              <li><a href="/about" className="text-light">About</a></li>
              <li><a href="/news" className="text-light">News/Blog</a></li>
              <li><a href="/conferences" className="text-light">Conferences</a></li>
              <li><a href="/reports" className="text-light">Reports</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
          <span className=" copyright text-light d-block mb-3 navigo font-weight-normal">© {year}, Vermont University Press · <a className="text-light" href="https://fulcrum.org/accessibility/">Accessibility</a> · <a className="text-light" href="https://fulcrum.org/preservation">Preservation</a> · <a className="text-light" href="https://fulcrum.org/privacy">Privacy</a> · <a className="text-light" href="https://fulcrum.org/terms">Terms</a></span>
          </div>
          <div className="col-md-4 text-right">
            <small className="text-white scala-sans">Powered by</small> <a href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
