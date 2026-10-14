


{/*Ejercicio 3 */}


let alternativa = "Imagen del restaurante"
let imagen = "imagenRestaurante"

let texto1 = "La Fundación Starbucks® fortalece a la humanidad transformando vidas en todo el mundo, centrándose en permitir que las comunidades sean resistentes y prosperen, y en elevar a las comunidades afectadas por desastres."
let texto2 = "El café no sería posible sin los agricultores de todo el mundo que lo cultivan. Por eso trabajamos junto a ellos para apoyar prácticas agrícolas sostenibles y a sus comunidades."
let texto3 = "Cuidar el medio ambiente es imprescindible para el futuro del café y de los caficultores, y para el mundo en que vivimos."

let elemento1 = "Café con leche"
let elemento2 =  "Café solo"
let elemento3 = "Capuchino"

const arrayParrafos = [texto1, texto2, texto3]
const arrayElementos = [elemento1, elemento2, elemento3]
export default function Exercicio3(){
return (<>

<h1>Restaurante de Iria: </h1>
<img src= {imagen + ".jpg"} alt = {alternativa} className = "foto"></img>
{
    arrayParrafos.map((parrafo) => <p>parrafo</p>)
}

<ul>{
    arrayElementos.map((elemento) => <li>elemento</li>)
}
</ul>
</>);


}




{/* EJEMPLO CLASE: 

  // todas las etiquetas tienen q tener cierre
  // no se pueden usar las paalabras reservadas como "class" hay q usar className
  //style es un objeto y entonces hay q poner otra vez {}


 export default function Taboleiro() {
  const source = "dimensiones-pista-de-padel.jpg"
  const alternativa = "Heidy Lamar"
  const ciclos = "DAM, SMR"
  const ies = {
    nome: "nombre",
    direccion: "O castelo"
  }
  return (
    <>
    
      <section className="card" style={{ maxWidth: '320px' }}>
        <h1>IES SAN MAMEDE</h1>
        <img src={source} className="card-img-top" alt="alternativa" />
        <ul style={{backgroundColor:'black', color:'pink'}}> 
          
        <li>ESO</li>
        <li>Bacharelato</li>
        <li>Ciclos: {ciclos}</li>
        </ul>
        <h2>{ies.nome} en {ies.direcion}</h2>
        <div className="card-body">
          <h4 className="card-title">Pista de Pádel</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card’s content.
          </p>
          <a href="#" className="btn-solid theme-primary">Go somewhere</a>
        </div>
      </section>
      
      <div className="board-row">
        <button className= "square">1</button>
        <button className= "square">2</button>
        <button className= "square">3</button>
      </div>
      <div className="board-row">
        <button className= "square">4</button>
        <button className= "square">5</button>
        <button className= "square">6</button>
      </div>
      <div className="board-row">
        <button className= "square">7</button>
        <button className= "square">8</button>
        <button className= "square">9</button>
      </div>
    </>

  );
 }


*/
}

