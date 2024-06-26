import React from 'react';

const List = ({ data, removeItem }) => {
  return (
    <div className="row">
      {data.map((person) => (
        <div key={person.id} className="col-md-4 mb-3">
          <div className="card h-100">
            <img src={person.img} className="card-img-top" alt={person.nome} />
            <div className="card-body">
              <h5 className="card-title">{person.nome}</h5>
              <p className="card-text">{person.stato}</p>
              <button className="btn btn-warning" onClick={() => removeItem(person.id)}>
                Rimuovi
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
