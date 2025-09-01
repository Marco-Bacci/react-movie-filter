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

  const [genre, setGenre] = useState("")
  const [filteredGenre, setFilteredGenre] = useState(movies)


  useEffect(()=>{
    console.log(`genere selezionato: ${genre}`)
    const array = movies.filter((movie)=>{
      return movie.genre === genre
    })
    setFilteredGenre(array)
  }, [genre] ) 

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
              {filteredGenre.map((movie, index) => {
                return (
                  <li key = {index } className="list-group-item  ">
                    <p>{movie.title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-4 mt-3">
            <select onChange={(e)=> setGenre(e.target.value)}>
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
