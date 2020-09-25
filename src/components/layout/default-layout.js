import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Menu } from './menu'
import { MobileMenu } from './mobile-menu'
import { Footer } from './footer'
import './default-layout.css'
import { useWindowWidth } from '../../hooks'

export const DefaultLayout = ({ children }) => {
  const { isCompact } = useWindowWidth()
  return (
    <div className="layout-wrapper">
      { isCompact ? <MobileMenu /> : <Menu /> }
      <Container as="main" text>
        { children }
      </Container>
      <Footer />
    </div>
  )
}
