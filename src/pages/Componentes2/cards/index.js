import '../index.scss'
import '../../common/card-quadrado.scss'
import icon from '../icon.svg'

export default function Card(props){
    function clicarHobby(){
        alert('o Hobby de ' + props.nome + " é " + props.hobby)
    }
    return(
    <section className='Card-Quadrado'>
        <div className='divisao1-componentes2'>
            <img src={icon}/>
            <h1>{props.nome}</h1>
        </div>
        <div className='divisao2-componentes2'>
            <h1>Idade <span>{props.idade}</span></h1>
            <h1>Nascimento <span className='span-divisao2'>{props.nascimento}</span></h1>
        </div>
        <button onClick={clicarHobby}>Hobby</button>
    </section>
    )
}