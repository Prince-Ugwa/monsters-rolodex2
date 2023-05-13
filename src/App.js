import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/searchbox.components";
import "./App.css";

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p> Youn click {count} times</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         {" "}
//         click me
//       </button>
//     </div>
//   );
// };
const App = () => {
  console.log("render");
  const [searchField, setSearchField] = useState(""); // initial value, setvalues
  // console.log({ searchField });
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonster] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => response.json().then((data) => setMonsters(data))
      //the use effect here prevent the fetch from infinite re rendering. becase the fetch is calling data from external memory
    );
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonster(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h2 className="title"> Monster rolodex</h2>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search monsters"
        className="monster-seach-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

/*
///////////////////////////// CLASS COMPONENT////////////////////////////
import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/searchbox.components";
import "./App.css";
import { Component } from "react";
*/

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       // monster1: { name: "Linda" },
//       // monster2: {
//       //   name: "Giggy",
//       // },
//       // monster3: {
//       //   name: "Jacky",
//       // },
//       // monsters: [
//       //   { name: "Linda", id: "12edfr" },
//       //   { name: "Giggy", id: "12edfd" },
//       //   { name: "Jacky", id: "12qaswfr" },
//       // ],
//       monsters: [],
//       searchField: "",
//     };
//     // console.log("constructor");
//   }

//   componentDidMount() {
//     // console.log("compdidmount");
//     fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
//       response.json().then((data) =>
//         this.setState(
//           () => {
//             return { monsters: data };
//           }
//           // () => {
//           //   console.log(this.state);
//           // }
//         )
//       )
//     );
//   }
//   onSearchChange = (event) => {
//     // console.log(event.target.value);
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//   render() {
//     // const { monsters, searchField } = this.state; can be used inplace of any this.state
//     // const { searchField } = this;
//     const filteredMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(this.state.searchField);
//     });
//     // console.log("render");
//     return (
//       <div className="App">
//         <h2 className="title"> Monster rolodex</h2>
//         {/*filteredMonsters.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           );
//         })*/}
//         <SearchBox
//           onChangeHandler={this.onSearchChange}
//           placeholder="Search monsters"
//           className="monster-seach-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }

//   /*
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hii I'm {this.state.name.firstName} {this.state.name.lastName}, I
//             work at {this.state.company}
//           </p>
//           <button
//             onClick={() => {
//               this.setState(
//                 () => {
//                   return {
//                     name: {
//                       firstName: "Omale",
//                       lastName: "Ugwa",
//                     },
//                   };
//                 },
//                 () => {
//                   console.log(this.state);
//                 }
//               );
//             }}
//           >
//             change name
//           </button>
//         </header>
//       </div>
//     );
//   }
//   */
// }

export default App;
