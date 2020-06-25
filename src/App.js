import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rental from "./components/rental";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className='container'>
          <Switch>
            <Route path='/movies/id' component={MovieForm} />
            <Route path='/movies' Component={Movies}></Route>

            <Route path='/customers' Component={Customers}></Route>
            <Route path='/rental' Component={Rental}></Route>
            <Route path='/notFound' Component={NotFound} />
            <Redirect from='/' exact to='/movies' />
            <Redirect from='/notFound' />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
