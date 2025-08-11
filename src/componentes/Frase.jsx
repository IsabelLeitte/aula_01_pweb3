import Frase2 from './Frase2'

const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAFNZ8wDIjPZrmM13Vo2pLsMKy2fO1FWBCFzzlR12V8JRGJk7urXwBSF3gtPf5pCHPjo&usqp=CAU"

function Frase () {
    return (
        <div>
            <p> Meu Segundo Componente!</p>
            <img src= {url} />
            <Frase2/>
        </div>
    )
}
export default Frase