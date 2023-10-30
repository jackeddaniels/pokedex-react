import "./Pokecard.css"
//TODO: add alt attribute to img; ex. name of pokemon
function Pokecard({ p }) {
  const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`

  return (
  <div className="Pokecard-card">
    <p className="Pokecard-name">{ p.name }</p>
    <img src={ pokeImg } className="Pokecard-img"></img>
    <p className="Pokecard-type">{ p.type }</p> </div>
  );
}

export default Pokecard;