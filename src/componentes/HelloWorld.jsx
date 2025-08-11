import Frase from './Frase'

const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhETrBXLZFM8AWmYNIGwfK1I47RMlrUngVA&s"

function HelloWorld () {
    return(
        <div>
            <p> Meu Primeiro Componente! </p>
            <img src= {url} />
            <Frase/>
        </div>
    )
}
export default HelloWorld