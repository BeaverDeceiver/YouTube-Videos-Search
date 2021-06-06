import React from 'react';
import { Searchbar } from './components/Searchbar/Searchbar';
import './App.css';
import { VideoList } from './components/VideoList/VideoList';

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <Searchbar />
      </header>
      <main className="container">
        <VideoList />
      </main>
    </div>
  );
}

export default App;
