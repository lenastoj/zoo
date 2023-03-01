import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function AnimalList() {
   const initalAnimals = [
    {type: 'bird', name: 'duck', dateOfBirth: new Date().getFullYear() },
    {type: 'bird', name: 'pigeon', dateOfBirth: new Date().getFullYear() },
    {type: 'mammal', name: 'cat', dateOfBirth: new Date().getFullYear() },
    {type: 'mammal', name: 'dog', dateOfBirth: new Date().getFullYear() },
    {type: 'mammal', name: 'rabbit', dateOfBirth: new Date().getFullYear() },
    {type: 'bird', name: 'owl'}
  ];
  const [animals, setAnimals] = useState(initalAnimals);

  const HandleRemove = (deleteAnimal) => {
    const newAnimals = animals.filter((animal) => animal !== deleteAnimal)
    setAnimals(newAnimals);
  }

  const MoveToTop = (moveAnimal) => {
    let firstAnimal;
    const newAnimalsOrder = animals.filter((animal) => {
      if(animal == moveAnimal) {
        firstAnimal = [animal];
        return false;
      }
       return true;});
       setAnimals([...firstAnimal, ...newAnimalsOrder])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const AddAnimal = (event) => {
    let newAnimal = {[event.target.id]: event.target.value};
    setAnimals([...animals, newAnimal]);
  }


  return(
    <div className="App">
      <h1>Animal List:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <input type="text" name="type" value={animals.type} onChange={AddAnimal}/>
        </label>
        <label>
          Name:
          <input type="text" name="name" value={animals.type} onChange={AddAnimal}/>
        </label>
        <label>
          Date of Birth:
          <input type="number" name="dateOfBirth" value={animals.dateOfBirth} onChange={AddAnimal}/>
        </label>
        <button type='submit'>Add animal</button>
      </form>
      <table>
        <thead>
            <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Date Of Birth</th>
            <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            {animals.map((animal, key) => 
            {
            return (
                <tr key={key}>
                <td>{animal.type}</td>
                <td>{animal.name}</td>
                {animal.dateOfBirth == null ?
                  <td>Unknown</td> :
                  <td>{animal.dateOfBirth }</td> 
                  }
                  <td><button onClick={() => HandleRemove(animal)}>Remove</button></td>
                  <td><button onClick={() => MoveToTop(animal)}>Move To Top</button></td>
                  {/* <td><button>Remove</button></td> */}
                  {/* <td><button>Move To Top</button></td> */}

                </tr>
            )
            })}
        </tbody>
      </table>
    </div>
  );
}

export default AnimalList;

