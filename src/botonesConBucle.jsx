
{/* EJEMPLO CLASE: */}


  // todas las etiquetas tienen q tener cierre
  // no se pueden usar las paalabras reservadas como "class" hay q usar className
  //style es un objeto y entonces hay q poner otra vez {}



  function Cadrado({valor}){ //hay q meterlo entre llaves pq es diferente a js
    return <button className= "square">{valor}</button>
  }


 export default function BotonesConBucle() {
  const source = "dimensiones-pista-de-padel.jpg"
  const alternativa = "Heidy Lamar"
  const ciclos = "DAM, SMR"

  
  const ies = {
    nome: "nombre",
    direccion: "O castelo"
  }

  const array = [1, 2, 3]
  let contador = 0;


  function crearEtiqueta({i}){
    if(i > 3){
      contador = contador + 1;
      return <Cadrado key={i + contador} valor={i+ contador}/>
      
    } else {
      <Cadrado key={i} valor={i}/>
    }
    
  }

  return (
    <>

      {array.map((i) => <div key={i} className="board-row key">  {array.map((i) => crearEtiqueta({i}))}  </div>)}

      {/*
      <div className="board-row">
        {array.map((i) => <Cadrado key={i} valor={i}/>)}
      </div>
      <div className="board-row">
        {array46.map((i) => <Cadrado key={i} valor={i}/>)}
      </div>
      <div className="board-row">
       {array79.map((i) => <Cadrado key={i} valor={i}/>)}
      </div>
       */}
      
    </>

  );

 }
