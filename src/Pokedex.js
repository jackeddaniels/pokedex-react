import Pokecard from "./Pokecard";
//TODO: classname on every component
function Pokedex({ pokemonDb }) {

  return <div>{pokemonDb.map(p => <Pokecard p={p} />)}</div>;
  // return <div>{pokemonDb.map(p => <Pokecard id={p.id} name={p.name}  />)}</div>;

}

export default Pokedex;