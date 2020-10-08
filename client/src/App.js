import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './components';
import { FAQ, Login, NotFound } from './views';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/faq">
          <FAQ />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App;