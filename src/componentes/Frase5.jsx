import Frase6 from './Frase6'

const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQu-Z2lykR-MXqfU0vBQC-7ClVg8NZEuTbzQ&s"


function Frase5 () {
    return (
        <div>
            <p> Meu Sexto Componente!</p>
            <img src= {url} />
            <Frase6/>
        </div>
    )
}
export default Frase5