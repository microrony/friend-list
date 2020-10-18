import React from 'react';
import './App.css';

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: 'Jhon',
      job: 'Developer',
    },
    {
      img: 23,
      name: 'Jhok',
      job: 'Designer',
    },
    {
      img: 24,
      name: 'Rony',
      job: 'Artist',
    },
  ];

  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat, egestas
        neque venenatis sapien erat mus cubilia pharetra, nisi mauris leo auctor
        natoque pellentesque penatibus.
      </Person>
      <Person person={people[2]} />
    </section>
  );
};

const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;

  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  );
};

export default App;
