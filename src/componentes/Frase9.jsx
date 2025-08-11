import Frase10 from './Frase10'

const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3IRU6asAeoiFWMfVV36bfn1fouQ0HEEe61A&s"

function Frase9 () {
    return (
        <div>
            <p> Meu Decimo Componente!</p>
            <img src= {url} />
            <Frase10/>
        </div>
    )
}
export default Frase9