import React from 'react';
// import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent';

const events = timelineData

function App() {
  console.log(timelineData);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{events.person}'s Timeline</h1>
      </header>
      <main className="App-main">
        <TimelineEvent event={events.events}/>
      </main>
    </div>
  );
}

export default App;
