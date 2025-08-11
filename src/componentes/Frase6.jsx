import Frase7 from './Frase7'

const url = "https://i.pinimg.com/474x/a8/e8/67/a8e8672212a428585fc652eeda4e7e55.jpg"

function Frase6 () {
    return (
        <div>
            <p> Meu Setimo Componente!</p>
            <img src= {url} />
            <Frase7/>
        </div>
    )
}
export default Frase6