import { useState, useEffect } from "react";
function App() {
  const movies = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];

  const [genre, setGenre] = useState("");
  const [filtered, setFiltered] = useState(movies);
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log(`genere selezionato: ${genre}, titolo: ${title}`);
    // SE genre è vuoto
    // ALLORA flteredGenre deve essere uguale a tutti i movies
    // ALTRIMENTI (gnere non è vuoto) devo filtrare e Filtered deve essere = al risultato del filtro
    let array = movies;

    if (genre !== "") {
      array = array.filter((movie) => {
        return movie.genre === genre;
      });
    }
    if (title !== "") {
      array = array.filter((movie) => {
        return movie.title.toLowerCase().includes(title.toLowerCase());
      });
    }
    setFiltered(array);
  }, [genre, title]);

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
              {filtered.map((movie, index) => {
                return (
                  <li key={index} className="list-group-item  ">
                    <p>{movie.title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-4 mt-3">
            <select onChange={(e) => setGenre(e.target.value)}>
              <option value="">Seleziona genere</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>
            <div>
              <input
                className="mt-3"
                type="text"
                placeholder="Cerca per titolo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
