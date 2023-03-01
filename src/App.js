import logo from './logo.svg';
import './App.css';

function AnimalList() {
  const animals = [
    {type: 'bird', name: 'duck', dateOfBirth: newDate() },
    {type: 'bird', name: 'seaguell', dateOfBirth: newDate() },
    {type: 'mammal', name: 'cat', dateOfBirth: newDate() },
    {type: 'mammal', name: 'dog', dateOfBirth: newDate() },
    {type: 'bird', name: 'mouce', dateOfBirth: newDate() },
  ];

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
