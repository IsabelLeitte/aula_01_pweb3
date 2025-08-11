import Frase5 from './Frase5'

const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTds_1NCEYTtx7VqjK7L29clyAaypyKcuqwVs8B0noPQ9XaJnrDFmnipVXP2QMxteHLwn4&usqp=CAU"

function Frase4 () {
    return (
        <div>
            <p> Meu Quinto Componente!</p>
            <img src= {url} />
            <Frase5/>
        </div>
    )
}
export default Frase4