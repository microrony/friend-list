import React from 'react';
import './App.css';

const App = () => <PersonList />;

const PersonList = () => <Person />;

const Person = () => {
  const url = 'https://randomuser.me/api/portraits/thumb/men/22.jpg';
  return (
    <div className="person">
      <img src={url} alt="person" />
      <h4>Name</h4>
      <h4>Job</h4>
    </div>
  );
};

export default App;
