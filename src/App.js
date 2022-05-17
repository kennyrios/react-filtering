import { useState, useEffect } from 'react'

import {Component } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('a');//[value, setValue]
  const [monsters, setMonsters] = useState([]);

  console.log('render');


  useEffect(() =>  {
    console.log('effect fire');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, [])

  const onSearchChange = (event)=> {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
    
  }

  const filteredMonster = monsters.filter((monster) =>{
    return monster.name.toLocaleLowerCase().includes(searchField);
  })

    return (
      <div className="App">
       
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          className = 'monsters-search-box' 
          onChangeHandler={onSearchChange} 
          placeholder='search monster' 
        />
        <CardList monsters={filteredMonster}/>
      </div>
    );
  } 


export default App;
