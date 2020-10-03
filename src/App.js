import React from 'react';
import './App.css';
import Header from './components/header/Header';
import RecommendedVideos from './components/recommendedVideos/RecommendedVideos';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './components/searchPage/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header />
        <Switch>
          <Route path="/search/:searchTerm" children={<SearchPage />}>
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              {/* SearchPage */}
              <SearchPage />
            </div>
          </Route>
          <Route exact path="/">
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              {/* RecommendedVideos */}
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
