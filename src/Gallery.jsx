import { getImageUrl } from './utils.js';

const Curie = {
    nombre =  "Maria Skłodowska-Curie",
    profesion = "física y química", 
    premios = "Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci", 
    descubrio = "Polonio (elemento químico)", 
    imagen = {
          className : "avatar",
          src : getImageUrl('szV5sdG'),
          alt: "Maria Skłodowska-Curie",
          width : 70,
          height: 70
    }
        
};

const Saruhashi = {
     nombre =  "Katsuko Saruhashi",
    profesion = " geoquímica", 
    premios = "(Premio Miyake de geoquímica, Premio Tanaka)", 
    descubrio = " un método para medir el dióxido de carbono en el agua de mar"
}

function Perfil(persona){
    return <>
    <h2>{persona.nombre}</h2>
        <img 
          className={persona.imagen.className}
          src={persona.imagen.src}
          alt={persona.imagen.alt}
          width={persona.imagen.width}
          height={persona.imagen.height}
        />
        <ul>
          <li>
            <b>Profesión: </b> 
            {persona.profesion}
          </li>
          <li>
            <b>Premios: 4 </b> 
            {persona.premios}
          </li>
          <li>
            <b>Descubrió: </b>
            {persona.descubrio}
          </li>
        </ul>

    </>
    

}





export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      
      <section className="profile">
        <Perfil persona={Curie}></Perfil>
        
      </section>

      <section className="profile">
         <Perfil persona={Curie}></Perfil>
      </section>
    </div>
  );
}
