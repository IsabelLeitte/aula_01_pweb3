import Frase9 from './Frase9'

const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JDyGsfnbCspNw-h-njFWey6aSNGFseuloA&s"

function Frase8 () {
    return (
        <div>
            <p> Meu Nono Componente!</p>
            <img src= {url} />
            <Frase9/>
        </div>
    )
}
export default Frase8