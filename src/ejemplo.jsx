//CONDICIONAL TERNARIO CON ETIQUETAS:

if(isPacked){
    return <li className="item">{name} metido</li>
}
return <li className="item">{name} no metido </li>


if(isPacked){
    return null // eso simplemente no enseña nada, no da error
}
return <li className="item">{name} no metido </li>


//se puede meter contenido diferente:
function Item({name, isPacked}){
return <li className="item">
        {isPacked ? name + "tick" :name}
        </li>
}

// una de las opciones puede ser otra etiqueta
function Item({name, isPacked}){
return <li className="item">
        {name } {isPacked && 'tick'}
        </li>
}



// ejer 1
function Item({ name, importance }) {
  return (
    <li className="item">
      {importance > 0 ? <i>{name}</i> : name}
    </li>
  );
}


// ejer 2
function Drink({ name }) {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Parte de la planta</dt>
        if(name === 'té'){
          <dd>'hoja'</dd>
          <dd>'15–70 mg/taza'</dd>
          <dd>'4,000+ años'</dd>

        }else {
          <dd>'grano'</dd>
          <dd>'80–185 mg/taza'</dd>
          <dd>'1,000+ años'</dd>
        }
        
        </dl>
        
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="té" />
      <Drink name="café" />
    </div>
  );
}


// ejer 2 corregido:

function Drink({ name }) {
  let part, caffeine, age;

  if(name === 'té'){
    part = 'hoja';
    caffeine = '15–70 mg/taza';
    age = '4,000+ años';
  }else {
    part = 'grano';
    caffeine = '80–185 mg/taza'
    age = '1,000+ años'
  }


  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Parte de la planta</dt>
          <dd>{part}</dd>
          <dd>{caffeine}</dd>
          <dd>{age}</dd>
      </dl>
    </section>
  
  );
}
export default function DrinkList() {
  return (
    <div>
      <Drink name="té" />
      <Drink name="café" />
    </div>
  );
}

// poner array bebidas generico https://codesandbox.io/p/sandbox/react-dev-forked-43wmqh?file=%2Fsrc%2FApp.js%3A24%2C16

const bebidas = {
  té:{
    parte :"hoja",
    cafeina:  '15–70 mg/taza',
    idade : '4,000+ años'
  }, 
  café:{
    parte :"grano",
    cafeina:  '80–185 mg/taza',
    idade : '1,000+ años'
  }
}



function Drink({ name }) {
 const info  = bebidas[name]

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Parte de la planta</dt>
          <dd>{info.parte}</dd>
        <dt> Contenido </dt>
          <dd>{info.cafeina}</dd>
        <dt>Antigüedad </dt>
          <dd>{info.idade}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="té" />
      <Drink name="café" />
    </div>
  );
}



