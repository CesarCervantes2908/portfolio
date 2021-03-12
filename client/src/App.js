import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import ProjectPage from './components/ProjectPage';


function App() {
  return (
    <main className="app">
      <Router>
        <Route exact path="/" component={MainPage}></Route>
        <Route path="/projects/:id" component={ProjectPage}></Route>
      </Router>
    </main>
  )
};

export default App;
