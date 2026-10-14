{/*Ejercicio 1 */}

  const produtos = [
  { id: 1, nome: "Teclado", prezo: 25 },
  { id: 2, nome: "Rato", prezo: 15 },
];

export default function Tenda() {
  return (
    <>
    <h1 className="titulo">Tenda</h1>
    <img src="logo.png" alt="Logo"/>
    <ul>
      {produtos.map((p) => (
        <li>{p.id} - {p.nome} - {p.prezo} €</li>
      ))}
    </ul>
   </>
  );

}




// Falta la etiqueta del return 
// Class tiene que ser className
// Fallo de convención es la mayúscula de la función Tenda
// Falta el id en el map (todos los elementos repetidos en react tienen que tener un identificador)
//Falta cerrar la etiqueta de cierre de imagen 
