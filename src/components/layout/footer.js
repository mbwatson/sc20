import React from 'react'
import { Link } from 'gatsby'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import logo from '../../images/renci-dark.png'

export const Footer = () => (
  <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
    <Container textAlign='center'>
      <Grid divided inverted stackable>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Group 1' />
          <List link inverted>
            <List.Item as='a'>Link One</List.Item>
            <List.Item as='a'>Link Two</List.Item>
            <List.Item as='a'>Link Three</List.Item>
            <List.Item as='a'>Link Four</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Group 2' />
          <List link inverted>
            <List.Item as='a'>Link One</List.Item>
            <List.Item as='a'>Link Two</List.Item>
            <List.Item as='a'>Link Three</List.Item>
            <List.Item as='a'>Link Four</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Group 3' />
          <List link inverted>
            <List.Item as='a'>Link One</List.Item>
            <List.Item as='a'>Link Two</List.Item>
            <List.Item as='a'>Link Three</List.Item>
            <List.Item as='a'>Link Four</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={7}>
          <Header inverted as='h4' content='Footer Header' />
          <p>
            Extra space for a call to action inside the footer that could help re-engage users.
          </p>
        </Grid.Column>
      </Grid>

      <Divider inverted section />

      <Link to="/"><Image centered size='small' src={ logo } /></Link>
      <div>&copy; { new Date().getFullYear() }</div>

    </Container>
  </Segment>
)
