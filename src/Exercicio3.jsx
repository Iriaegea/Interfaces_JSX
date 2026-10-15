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
    arrayParrafos.map((parrafo) => <p>{parrafo}</p>) // devuelve un objeto asi q va entre {}
}

<ul>{
    arrayElementos.map((elemento) => <li>{elemento}</li>)
}
</ul>
</>);


}
