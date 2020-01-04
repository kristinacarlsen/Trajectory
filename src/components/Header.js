import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Home from '../pages/Home';
import Posts from '../pages/Posts';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Trajectory',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'posts', path: '/posts'}
      ],
      home: {
        title: 'Trajectory',
        subtitle: 'Change the course of your life',
        text: 'Get started below'
      },
      about: {
        title: 'My Trajectory'
      },
      posts: {
        title: 'Message Me'
      }
    };
  }

  render() {
    return (
      <Router fluid={true}>
          <Navbar bg='transparent' expand='lg'>

            <Navbar.Brand>Trajectory</Navbar.Brand>

            <Navbar.Toggle className='border-0' area-controls='navbar-toggle' />

            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/posts'>Posts</Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>

          <Route path='/' exact render={() => <Home title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />}></Route>

          <Route path='/posts' render={() => <Posts title={this.state.posts.title} />}></Route>

      </Router>
    );
  }
}


export default Header;