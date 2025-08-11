import Frase4 from './Frase4'

const url = "https://i.ytimg.com/vi/AKPlSu4m0iw/maxresdefault.jpg"

function Frase3 () {
    return (
        <div>
            <p> Meu Quarto Componente!</p>
            <img src= {url} />
            <Frase4/>
        </div>
    )
}
export default Frase3