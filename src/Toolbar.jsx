

import Button from './Button.jsx'

export default function Toolbar({onPelicula, onImaxe}){
    return (
        <div>
        <Button onClick={onPelicula}>
            Reproducir Película
        </Button>
        <Button onClick= {onImaxe}>
            Cargar imaxe
        </Button>
        </div>
    );
}

//children en Button reprexenta todo lo q hay dentro del Button de abajo(del toolbar)