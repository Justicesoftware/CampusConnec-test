// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import StudyGroupsPage from './pages/StudyGroupsPage';
import TutorMatchPage from './pages/TutorMatchPage';
import ExplorePage from './pages/ExplorePage';
import './styles/global.css'; // Import global Notion-style theme

function App() {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/studygroups" component={StudyGroupsPage} />
          <Route path="/tutormatch" component={TutorMatchPage} />
          <Route path="/explore" component={ExplorePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
