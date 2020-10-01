import React from 'react';
import './App.css';
import Header from './components/header/Header';
import RecommendedVideos from './components/recommendedVideos/RecommendedVideos';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      <div className="app__page">
        {/* Sidebar */}
        <Sidebar />
        {/* RecommendedVideos */}
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
