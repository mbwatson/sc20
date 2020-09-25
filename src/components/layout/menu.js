import React from 'react'
import { Link } from 'gatsby'
import { Container, Image, Menu as Nav } from 'semantic-ui-react'
import logo from '../../images/renci-dark.png'

export const Menu = () => {
  return (
    <Nav fixed='top' inverted>
      <Container fluid>
        <Image size='tiny' src={ logo } style={{ margin: '0.25rem 1rem 0.5rem 1rem' }}/>
        <div style={{ flex: 1 }} />
        <Nav.Item as={ Link } to="/">Home</Nav.Item>
        <Nav.Item as={ Link } to="/irods">iRODS</Nav.Item>
        <Nav.Item as={ Link } to="/nrig">NRIG</Nav.Item>
        <Nav.Item as={ Link } to="/health-sciences">Health Sciences</Nav.Item>
        <Nav.Item as={ Link } to="/eds">Earth Data Science</Nav.Item>
        <Nav.Item as={ Link } to="/consortia">Consortia</Nav.Item>
        <Nav.Item as={ Link } to="/contact">Contact</Nav.Item>
      </Container>
    </Nav>
  )
}
