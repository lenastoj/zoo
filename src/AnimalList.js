import logo from './logo.svg';
import './App.css';

function AnimalList() {
  const animals = [
    {type: 'bird', name: 'duck', dateOfBirth: new Date().getFullYear() },
    {type: 'bird', name: 'pigeon', dateOfBirth: new Date().getFullYear() },
    {type: 'mammal', name: 'cat', dateOfBirth: new Date().getFullYear() },
    {type: 'mammal', name: 'dog', dateOfBirth: new Date().getFullYear() },
    {type: 'mammal', name: 'rabbit', dateOfBirth: new Date().getFullYear() },
    {type: 'bird', name: 'owl'}
  ];
  // {console.log(animals)}

  
  return(
    <div className="App">
      <h1>Animal List:</h1>
      <table>
        <thead>
            <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Date Of Birth</th>
            </tr>
        </thead>
        <tbody>
            {animals.map((animal, key) => 
            {
            return (
                <tr key={key}>
                <td>{animal.type}</td>
                <td>{animal.name}</td>
                {/* <td>{animal.dateOfBirth }</td> */}
                {animal.dateOfBirth == null ?
                  <td>Unknown</td> :
                  <td>{animal.dateOfBirth }</td> 
                  }
                </tr>
            )
            })}
        </tbody>
      </table>
    </div>
  );
}

export default AnimalList;

