import React from 'react';
import BetterCallSaulHome from './components/BetterCallSaulHome/BetterCallSaulHomeContainer';
import BreakingBadHome from './components/BreakingBadHome/BreakingBadHomeContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import MainLayout from './components/MainLayout/MainLayout';
import Info from './components/Info/Info';
import Favorites from './components/Favorites/FavoritesContainer';

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
            <Route exact path='/' component={BreakingBadHome} />
            <Route exact path='/betterCallSaul' component={BetterCallSaulHome} />
            <Route exact path='/info' component={Info} />
            <Route exact path='/favorites' component={Favorites} />
          </AnimatedSwitch >
        </MainLayout>
      </BrowserRouter>
    )
  }
}

export default App;