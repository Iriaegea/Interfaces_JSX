{/*Ejercicio 2: */}


let nome = "Lucia Perez"
let rol = "Deseñadora web"
let foto = "foto"
let inicio = 2019
let alternativa = "Foto de Lucía "




export default function Exercicio2(){
  return(
<>

<h1>{nome}</h1>
<img src={foto+".jpg"} alt={alternativa +  "Anos de experiencia: " + (2026 - inicio)} className="foto"/>
<p className="rol">{rol}</p> 
<label for="correo">Correo</label>
<input id="correo" type="email" tabindex={1}/>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
<p style={{color: 'gray', fontSize: '14px'}}>Dispoñible para proxectos</p>
</>
  );

}



  
