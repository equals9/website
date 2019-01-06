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
        <div className="ma4-ns ma3 bg-near-white br2 min-vh-100 flex justify-center items-center work-sans f4">
          {children}
        </div>
      </>
    )}
  />
)
