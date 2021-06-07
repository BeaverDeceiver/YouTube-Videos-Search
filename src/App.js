import React from 'react';
import { Searchbar } from './components/Searchbar/Searchbar';
import './styles/App.css';
import { VideoList } from './components/VideoList/VideoList';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__inner-container container">
          <Searchbar />
        </div>
      </header>
      <main className="rendered-area">
        <section className="container">
          <VideoList />
        </section>
      </main>
    </div>
  );
}

export default App;
