import Frase3 from './Frase3'

const url = "https://pt.quizur.com/_image?href=https://img.quizur.com/f/img6446b798c33593.38257326.jpg?lastEdited=1682356125&w=600&h=600&f=webp"

function Frase2 () {
    return (
        <div>
            <p> Meu Terceiro Componente!</p>
            <img src= {url} />
            <Frase3/>
        </div>
    )
}
export default Frase2