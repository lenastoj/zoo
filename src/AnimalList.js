import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { type } from "@testing-library/user-event/dist/type";

function AnimalList() {
  const initalAnimals = [
    { type: "bird", name: "duck", dateOfBirth: new Date().getFullYear() },
    { type: "bird", name: "pigeon", dateOfBirth: new Date().getFullYear() },
    { type: "mammal", name: "cat", dateOfBirth: new Date().getFullYear() },
    { type: "mammal", name: "dog", dateOfBirth: new Date().getFullYear() },
    { type: "mammal", name: "rabbit", dateOfBirth: new Date().getFullYear() },
    { type: "bird", name: "owl" },
  ];
  const [animals, setAnimals] = useState(initalAnimals);

  const HandleRemove = (deleteAnimal) => {
    const newAnimals = animals.filter((animal) => animal !== deleteAnimal);
    setAnimals(newAnimals);
  };

  const MoveToTop = (moveAnimal) => {
    let firstAnimal;
    const newAnimalsOrder = animals.filter((animal) => {
      if (animal == moveAnimal) {
        firstAnimal = [animal];
        return false;
      }
      return true;
    });
    setAnimals([...firstAnimal, ...newAnimalsOrder]);
  };

  const allSectors = ["birds", "mammals", "lions", "snakes"];
  const [type, setType] = useState();
  const [name, setName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [sector, setSector] = useState();

  const HandleSubmit = (e) => {
    e.preventDefault();
    setAnimals((previousAnimals) =>
      previousAnimals.concat({
        type,
        name,
        dateOfBirth,
        sector,
      })
    );
    setType("");
    setName("");
    setDateOfBirth("");
    setSector("");
  };

  return (
    <div className="App">
      <h1>Animal List:</h1>
      <form onSubmit={HandleSubmit}>
        <label>
          Type:
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="number"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </label>
        <label>
          Sector:
          <select
            value={sector}
            onChange={(e) => {
              setSector(e.target.value);
            }}
          >
            {allSectors.map((element, index) => {
              return (
                <option key={index} value={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </label>
        <button type="submit">Add animal</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Date Of Birth</th>
            <th>Remove</th>
            <th>Move</th>
            <th>Sector</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, key) => {
            return (
              <tr key={key}>
                <td>{animal.type}</td>
                <td>{animal.name}</td>
                {animal.dateOfBirth == null ? (
                  <td>Unknown</td>
                ) : (
                  <td>{animal.dateOfBirth}</td>
                )}
                <td>
                  <button onClick={() => HandleRemove(animal)}>Remove</button>
                </td>
                <td>
                  <button onClick={() => MoveToTop(animal)}>Move To Top</button>
                </td>
                {animal.sector == null ? (
                  <td>Unknown</td>
                ) : (
                  <td>{animal.sector}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AnimalList;
