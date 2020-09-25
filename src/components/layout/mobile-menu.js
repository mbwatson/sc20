import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Container, Dropdown, Icon, Image, Menu } from 'semantic-ui-react'
import logo from '../../images/renci-dark.png'

export const MobileMenu = () => {
  return (
    <Menu fixed='top' inverted>
      <Container style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Image size='tiny' src={ logo } style={{ margin: '0.25rem 1rem' }}/>
        <div style={{ flex: 1 }} />
        <Dropdown item text='Menu' style={{ height: '100%', padding: '1rem' }}>
          <Dropdown.Menu style={{ left: 'unset', right: 0 }}>
            <Dropdown.Item as={ Link } to="/">Home</Dropdown.Item>
            <Dropdown.Item as={ Link } to="/irods">iRODS</Dropdown.Item>
            <Dropdown.Item as={ Link } to="/nrig">NRIG</Dropdown.Item>
            <Dropdown.Item as={ Link } to="/health-sciences">Health Sciences</Dropdown.Item>
            <Dropdown.Item as={ Link } to="/eds">Earth Data Science</Dropdown.Item>
            <Dropdown.Item as={ Link } to="/consortia">Consortia</Dropdown.Item>
            <Dropdown.Item as={ Link } to="/contact">Contact</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  )
}
