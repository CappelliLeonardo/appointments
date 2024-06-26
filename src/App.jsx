import React, { useState } from 'react';
import './App.css';
import data from './data/data';
import List from './List';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const refreshList = () => {
    setPeople(data);
  };

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <div className="container">
      <h1 className="text-center">Lista di Card</h1>
      <div className="mb-3 text-center">
        <button className="btn btn-primary mx-1" onClick={refreshList}>
          Aggiorna Lista
        </button>
        <button className="btn btn-danger mx-1" onClick={clearAll}>
          Elimina Tutte
        </button>
      </div>
      <List data={people} removeItem={removeItem} />
    </div>
  );
}

export default App;
