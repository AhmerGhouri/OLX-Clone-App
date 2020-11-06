import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import FooClass from './Containers/Home Page/Home';
import AppRouter from './Router/router';
import { BrowserRouter } from 'react-router-dom';
import history from 'history';



export default class App extends React.Component {
  render() {

    return (

      <div className="foo">

        <BrowserRouter>

          <AppRouter />

        </BrowserRouter>

      </div>



    );
  }
}
