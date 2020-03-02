import React from 'react';

import Registry from './component/registry';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './component/login';
import LoginGoogle from './component/longinGoogle';

function App() {

  return (
    <BrowserRouter>
      <Route path="/" component={Registry} />
      <Route path="/login" component={Login} />
      <Route path="/post" component={Post} />
      <LoginGoogle />
    </BrowserRouter >
  )
}
export default App;