


  // todas las etiquetas tienen q tener cierre
  // no se pueden usar las paalabras reservadas como "class" hay q usar className
  //style es un objeto y entonces hay q poner otra vez {}





  const produtos = [
  { id: 1, nome: "Teclado", prezo: 25 },
  { id: 2, nome: "Rato", prezo: 15 },
];

export default function tenda() {
  return (
    <>
    <h1 className="titulo">Tenda</h1>
    <img src="logo.png" alt="Logo"/>
    <ul>
      {produtos.map((p) => (
        <li>{p.nome} - {p.prezo} €</li>
      ))}
    </ul>
   </>
  );

}




{/*


 export default function Taboleiro() {
  const source = "dimensiones-pista-de-padel.jpg"
  const alternativa = "Heidy Lamar"
  const ciclos = "DAM, SMR"
  return (
    <>
    
      <section className="card" style={{ maxWidth: '320px' }}>
        <h1>IES SAN MAMEDE</h1>
        <img src={source} className="card-img-top" alt="alternativa" />
        <ul style={{backgroundColor:'black', color:pink}}> 
          
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



