import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./layouts/Header";
import Books from "./books/Books";
import Categories from "./categories/Categories";

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/books" />
          </Route>

          <Route path="/books">
            <Books/>
          </Route>

          <Route exact path="/categories">
            <Categories/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
