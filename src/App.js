import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/HomeContainer';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}

export default App;