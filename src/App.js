import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import FindDog from './FindDog';
// import DogDetails from './DogDetails';

import './App.css';

const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: '/whiskey.jpg',
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!"
    ]
  },
  {
    name: "Duke",
    age: 3,
    src: '/duke.jpg',
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs."
    ]
  },
  {
    name: "Perry",
    age: 4,
    src: '/perry.jpg',
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain."
    ]
  }
  // {
  //   name: "Tubby",
  //   age: 4,
  //   src: '/public/tubby.jpg',
  //   facts: [
  //     "Tubby is really stupid.",
  //     "Tubby does not like walks.",
  //     "Angelina used to hate Tubby, but claims not to anymore."
  //   ]
  // }
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav dogs={dogs}/>
        <Routes>
          <Route path='/dogs' element={<DogList dogs={dogs}/>}/>
          <Route path='/dogs/:name' element={<FindDog dogs={dogs}/>}/>
          <Route path='/*' element={<Navigate to='/dogs'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


// App.defaultProps = {
//   dogs: [
//     {
//       name: "Whiskey",
//       age: 5,
//       src: whiskey,
//       facts: [
//         "Whiskey loves eating popcorn.",
//         "Whiskey is a terrible guard dog.",
//         "Whiskey wants to cuddle with you!"
//       ]
//     },
//     {
//       name: "Duke",
//       age: 3,
//       src: duke,
//       facts: [
//         "Duke believes that ball is life.",
//         "Duke likes snow.",
//         "Duke enjoys pawing other dogs."
//       ]
//     },
//     {
//       name: "Perry",
//       age: 4,
//       src: perry,
//       facts: [
//         "Perry loves all humans.",
//         "Perry demolishes all snacks.",
//         "Perry hates the rain."
//       ]
//     },
//     {
//       name: "Tubby",
//       age: 4,
//       src: tubby,
//       facts: [
//         "Tubby is really stupid.",
//         "Tubby does not like walks.",
//         "Angelina used to hate Tubby, but claims not to anymore."
//       ]
//     }
//   ]
// }

export default App;
