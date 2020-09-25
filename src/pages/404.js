import React, { Fragment } from 'react'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Fragment>
    <SEO title="404: Not found" />
    <div className="not-found-container">
      <div className="not-found" title="404: Not Found">404: Not Found</div>
    </div>
  </Fragment>
)

export default NotFoundPage
