



{
/*import Exercicio3 from "./Exercicio3.jsx"

export default function Taboleiro(){
  return(
      <Exercicio3></Exercicio3>
  );

  
}
 */
}




{/* EJEMPLO CLASE: */}


  // todas las etiquetas tienen q tener cierre
  // no se pueden usar las paalabras reservadas como "class" hay q usar className
  //style es un objeto y entonces hay q poner otra vez {}



  function Cadrado({valor}){ //hay q meterlo entre llaves pq es diferente a js
    return <button className= "square">{valor}</button>
  }


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
  
      
      <div className="board-row">
        <Cadrado valor = "1"/>
        <Cadrado valor = "2"/>
        <Cadrado valor = "3"/>
      </div>
      <div className="board-row">
        <Cadrado valor = "4"/>
        <Cadrado valor = "5"/>
        <Cadrado valor = "6"/>
      </div>
      <div className="board-row">
        <Cadrado valor = "7"/>
        <Cadrado valor = "8"/>
        <Cadrado valor = "9"/>
      </div>
    </>

  );
 }



