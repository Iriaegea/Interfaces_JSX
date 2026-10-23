

import "./reserva.css"
import Tarjeta from "./Tarjeta.jsx"

const pista = {
  id : 1,
  disponible : true,
  textoDisponibilidad :"Disponible hoy",
  gratuito : "Gratis",
  nombrePista:"Pista Polideportiva Municipal Centro",
  textoBotonReservar:"Reservar espacio",
  textoLugar : " Calle de la Alameda, 14 • Multideporte"


}


const pistas = [pista, 
  { ...pista, id : 2, disponible: false}, 
  { ...pista, id : 3, disponible: true}, 
  { ...pista, id : 4, disponible:false}]






export default function Taboleiro(){
  return(
    <>
    {
        pistas.map((pista )=><Tarjeta key = {pista.id} contido = {pista}/>)
    }
     
    </>
     
  
  );

  
}





{/* EJEMPLO CLASE: 


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



*/}