import React from 'react';
import BetterCallSaul from './components/BetterCallSaul/BetterCallSaulContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import MainLayout from './components/MainLayout/MainLayout';
import Info from './components/Info/Info';
import Home from './components/Home/HomeContainer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            >
            <Route exact path='/' component={Home} />
            <Route exact path='/betterCallSaul' component={BetterCallSaul} />
            <Route exact path='/info' component={Info} />
          </AnimatedSwitch >
        </MainLayout>
      </BrowserRouter>
    )
  }
}

export default App;