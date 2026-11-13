import { useState } from "react";
export default function BuscadorProductos(){
  

const productos = [
  'Teclado mecánico',
  'Rato sen fíos',
  'Monitor 4K',
  'Auriculares bluetooth',
  'Alfombrilla RGB',
  'Cámara web HD'
];

const [texto, setTexto] = useState("")


texto =  prompt("Escribe el producto que quieres buscar: ").trim().toLowerCase()
if(texto != ""){
  
}


}














/*EJERCICIO ESTADOS CUADRADO

  
   function Cadrado({valor, onCadradoClick}){
   
   
     return <button onClick={onCadradoClick}  className= "square">{valor}</button>
   }
  
  
  function calcularGanador(cadrados){
    const ganadoras = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    let ganador = null
    for(let i = 0; i<ganadoras.length; i++){
      const [a,b,c] = ganadoras[i];
     
      if(cadrados[a] && cadrados[a] == cadrados[b] && cadrados[a] == cadrados[c]){
        ganador = cadrados[a]
      }
      
    }
    return ganador
  }
  
  export default function Taboleiro() {
   const [xTurno, setXTurno] = useState(true);
   const [cadrados, setCadrados] = useState(Array(9).fill(null));

     const ganador = calcularGanador(cadrados);
      let estado;
      if(ganador){
        estado = "Ganador: " + ganador;

      } else {
        estado = "Seguinte xogador: " + (xTurno? "X" : "O");
      }

   function handleClick(i){
      const novosCadrados = cadrados.slice(); // se usa para copiar el array
     
      if(xTurno){
        novosCadrados[i] = "X";
      }else {
        novosCadrados[i] = "O";
      }
     
      setCadrados(novosCadrados);
      setXTurno(!xTurno);
   }
   return (
     <>

        <div>{estado}</div>
        <div className="board-row">
         <Cadrado valor={cadrados[0]} onCadradoClick={() => handleClick(0)}/>
         <Cadrado valor={cadrados[1]  }onCadradoClick={() => handleClick(1)}/>
         <Cadrado valor={cadrados[2] }onCadradoClick={() => handleClick(2)}/>
       </div>
       <div className="board-row">
         <Cadrado valor={cadrados[3]}onCadradoClick={() => handleClick(3)} />
         <Cadrado valor={cadrados[4]}onCadradoClick={() => handleClick(4)}/>
         <Cadrado valor={cadrados[5]}onCadradoClick={() => handleClick(5)}/>
       </div>
       <div className="board-row">
         <Cadrado valor={cadrados[6]}onCadradoClick={() => handleClick(6)}/>
         <Cadrado valor={cadrados[7]}onCadradoClick={() => handleClick(7)}/>
         <Cadrado valor={cadrados[8]}onCadradoClick={() => handleClick(8)}/>
       </div> 
     </>

   );
  }
  


*/










  
  /*
  function Cadrado({valor}){ //hay q meterlo entre llaves pq es diferente a js
    
     return <button  key={valor} className= "square">{valor}</button>
   }


  export default function Taboleiro() {
    const numeros = [1,2,3]
   return (
     <>
  
        {numeros.map((fila) => 
        <div key={fila} className="board-row"> 
          {numeros.map((n) => <Cadrado key={n} valor={(fila - 1) * 3 + n}></Cadrado>)}
        </div>)}






       {/* <div className="board-row">
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
       </div> }
     </>

   );
  }



}// */










// import './App.css'

// import Toolbar from './Toolbar.jsx'
// import Galeria from './Galeria.jsx'
// import Button from './Button.jsx'

// export default function App(){
//   return (
//     <>
    
//       <Toolbar
//       onPelicula = {() => alert("Reproducindo")}
//       onImaxe = {() => alert("Cargando imaxe")}
//       ></Toolbar>
//       <Galeria></Galeria>

//     </>
//   );
// }

















// import "./reserva.css"
// import Tarjeta from "./Tarjeta.jsx"






// const pista = {
//   id : 1,
//   disponible : true,
//   textoDisponibilidad :"Disponible",
//   gratuito : "  Gratis",
//   nombrePista:"Pista Polideportiva Municipal Centro",
//   textoBotonReservar:"Reservar espacio",
//   textoLugar : " Calle de la Alameda, 14 • Multideporte"


// }


// const pistas = [pista, 
//   { ...pista, id : 2, textoDisponibilidad: "Disponible"}, 
//   { ...pista, id : 3, textoDisponibilidad: "No disponible"}, 
//   { ...pista, id : 4, textoDisponibilidad:"Disponible"}]






// export default function Taboleiro(){
//   return(
//     <>
//     <MiAppBar ></MiAppBar>
//     <MiCaminito></MiCaminito>

//     {
//         pistas.map((pista )=><Tarjeta key = {pista.id} contido = {pista}/>)
//     }
//     <button className="btn-solid theme-warning">Gardar</button>
 
     
//     </>
     
  
//   );

  
// }




//  function MiAppBar(){
//     return <>
    
//         <nav className="navbar md:navbar-expand bg-1">
//     <div className="container-fluid">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon" aria-hidden="true"></span>
//         </button>
//         <dialog className="drawer drawer-end" tabindex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
//         <div className="drawer-header">
//             <h5 className="drawer-title" id="navbarDrawerLabel">Menu</h5>
//             <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
//         </div>
//         <div className="drawer-body mb-2 md:mb-0">
//             <ul className="nav navbar-nav me-auto">
//             <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="#">Link</a>
//             </li>
//             <li className="nav-item">
//                 <button className="nav-link" type="button" data-bs-toggle="menu" aria-expanded="false">
//                 Menu
//                 </button>
//                 <div className="menu">
//                 <a className="menu-item" href="#">Action</a>
//                 <a className="menu-item" href="#">Another action</a>
//                 <hr className="menu-divider"/>
//                 <a className="menu-item" href="#">Something else here</a>
//                 </div>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//             </li>
//             </ul>
//             <form className="hstack gap-2" role="search">
//             <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
//             <button className="btn-solid btn-icon theme-secondary" type="submit">
//                 <svg className="bi" width="16" height="16"><use href="#search" /></svg>
//             </button>
//             </form>
//         </div>
//         </dialog>
//     </div>
//     </nav>

// </>
// }


// const texto = ["Home", "Libray", "hola"]

// function MiCaminito(){
//   return <>
//     <nav aria-label="breadcrumb">
//     <ol className="breadcrumb">
//       {texto.map((t, i)=> 
//       i > 0 ? 
//        <>
//         <li className="breadcrumb-divider"></li>
//       <li className="breadcrumb-item">
//         <a className="breadcrumb-link" href="#">{t}</a>
//       </li>
//       </>
//        :
//       <li className="breadcrumb-item">
//       <a className="breadcrumb-link" href="#">{t}</a>
//       </li>
//     )}
//     </ol>
//   </nav>

  
// </>
// }

// {/* EJEMPLO CLASE: 


  // todas las etiquetas tienen q tener cierre
  // no se pueden usar las paalabras reservadas como "class" hay q usar className
  //style es un objeto y entonces hay q poner otra vez {}



//   function Cadrado({valor}){ //hay q meterlo entre llaves pq es diferente a js
//     return <button className= "square">{valor}</button>
//   }


//  export default function Taboleiro() {
//   const source = "dimensiones-pista-de-padel.jpg"
//   const alternativa = "Heidy Lamar"
//   const ciclos = "DAM, SMR"
//   const ies = {
//     nome: "nombre",
//     direccion: "O castelo"
//   }
//   return (
//     <>
  
      
//       <div className="board-row">
//         <Cadrado valor = "1"/>
//         <Cadrado valor = "2"/>
//         <Cadrado valor = "3"/>
//       </div>
//       <div className="board-row">
//         <Cadrado valor = "4"/>
//         <Cadrado valor = "5"/>
//         <Cadrado valor = "6"/>
//       </div>
//       <div className="board-row">
//         <Cadrado valor = "7"/>
//         <Cadrado valor = "8"/>
//         <Cadrado valor = "9"/>
//       </div>
//     </>

//   );
//  }



// */}