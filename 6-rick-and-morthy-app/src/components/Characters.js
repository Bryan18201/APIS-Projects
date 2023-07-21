export default function Characters(props) {
  const { characters, setCharacters } = props;

  const resetCharacters = () => {
    setCharacters(null);
  };

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>
        Volver a la home
      </span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name}></img>
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Con vida
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Muerto
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especie: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <spam className="back-home" onClick={resetCharacters}>
        Volver a la home
      </spam>

      <footer>
        <span className="text-grey" ><br></br>Creado por Bryan José Mañon, utilizando api de  <a href="https://rickandmortyapi.com/" target="_blank">Rick & Morty api</a> </span> 
      </footer>
    </div>
  );
}
