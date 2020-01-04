import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <Container>

      <Header />
      <Footer />

      </Container>
    )
  }
}


export default App;