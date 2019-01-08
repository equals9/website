import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'tachyons/css/tachyons.css'
import '../layouts/custom.css'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        />
        <div />
        <div className="pa4-ns pa3 min-vh-100 flex align-stretch ">
          <div className="bg-near-white br2 flex justify-center items-center work-sans f4 flex-grow-1">
            {children}
          </div>
        </div>
      </>
    )}
  />
)
