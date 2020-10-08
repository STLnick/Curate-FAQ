import React, { useMemo, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Footer, Header } from './components';
import { FAQ, Login, NotFound } from './views';
import { UserContext } from './UserContext';

const App = () => {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <UserContext.Provider value={providerValue}>
        <Header />
        <div className="container flex flex--column flex--align-center flex--justify-center">
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
        <Footer />
      </UserContext.Provider>
    </>
  )
}

export default App;