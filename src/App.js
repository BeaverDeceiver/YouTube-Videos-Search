import React from 'react';
import { Searchbar } from './components/Searchbar/Searchbar';
import './App.css';
import { VideoList } from './components/VideoList/VideoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Searchbar />
      </header>
      <main>
        <VideoList />
      </main>
    </div>
  );
}

export default App;
