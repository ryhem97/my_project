import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const list = [
  { 
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,  
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const App = () => (
  <div>
    <h1>My Hacker Stories</h1>
    <Search />
    <hr />
    <List />
  </div>
);

const Search = () => {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

const List = () => (
  <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <a href={item.url}>{item.title}</a> <br />
        Author: {item.author} <br />
        Comments: {item.num_comments} <br />
        Points: {item.points}
      </li>
    ))}
  </ul>
);

export default App;


