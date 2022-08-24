import React from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); // const [value, setValue] = useState(defaultValue);
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // uses what was returned from the previous line of code and parses the text body into a .json format
    .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {return monster.name.toLocaleLowerCase().includes(searchField)});
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = event => { // The event just return information regarding what changed
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Robots Rolodex</h1>

      {/* When there's a change in the search field, it gets processed here  
        Returns a new searchField value in the state */}
      <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monsters'/>

      {/* Where the filtered monsters actually get rendered onto the page */}
      <CardList monsters={filteredMonsters} />

    </div>
  )
}

// class App extends Component {

//   constructor() {
//     super();

//     // initial state
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   };

  // componentDidMount() {

  //   fetch('https://jsonplaceholder.typicode.com/users')
      
  //     .then(response => response.json()) // uses what was returned from the previous line of code and parses the text body into a .json format
  //       // .then(users => console.log(users)) // after the text was parse, it can then console.log it
      
  //       .then(users => {
  //         this.setState(() => {
  //           return {monsters: users};
  //         });
  //       });
  // };

  // onSearchChange = event => {
  //   // console.log(event); // The event just return information regarding what changed

  //   let searchField = event.target.value.toLocaleLowerCase();
  //   this.setState(() => {
  //     return { searchField }; // same as saying return { searchField: searchField };
  //   });
  // }

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

    // let filteredMonsters = monsters.filter(monster => {return monster.name.toLocaleLowerCase().includes(searchField)});

//     return (

//       <div className="App">
//         <h1 className='app-title'>Robots Rolodex</h1>

//         {/* When there's a change in the search field, it gets processed here  
//           Returns a new searchField value in the state */}
//         <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monsters'/>

//         {/* Where the filtered monsters actually get rendered onto the page */}
//         <CardList monsters={filteredMonsters} />

//       </div>

//     );
//   };

// }

export default App;