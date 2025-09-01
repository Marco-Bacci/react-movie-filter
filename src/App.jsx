import { useState } from "react";
function App() {
  const movies = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>MOVIES</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <ul className="list-group">
              {movies.map((movie) => {
                return (
                  <li className="list-group-item  ">
                    <p>{movie.title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-4 mt-3">
            <select>
              <option value="">Seleziona genere</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
