import './App.css'
import { useState } from "react";
import Button from './Button.jsx'
import {sculptureList} from './data.jsx'

export default function Galeria(){
    
    
    const [index, setIndex] = useState(0);

    function onSeguinteClick(){
        if(index < sculptureList.length -1){
            setIndex(index +1)
        console.log(`Valor de index${index}` )
        } else {
            setIndex(0)
        }
        
    }

    let escultura = sculptureList[index];

   

    const [amosar, setAmosar] = useState(false);
    function onDetalles(){
        
        
        if(!amosar){
            setAmosar(true);
        } else {
             setAmosar(false);
            

        }
    }

  return (
    <div>
        <Button onClick = {onSeguinteClick}> Seguinte </Button>
        <h2>{escultura.name}</h2>
        {amosar ? ( <Button onClick={onDetalles}>Deixar de amosar</Button>) : <Button onClick={onDetalles}>Amosar</Button>}
        {amosar ?( <p>{escultura.description}</p>) : <p></p>}
        <img src= {escultura.url} alt = {escultura.alt} style={{width:'120px', height:'120px'}}></img>
        <h3>Imaxe {index +1} de {sculptureList.length}</h3>
   </div>
   
  );
}