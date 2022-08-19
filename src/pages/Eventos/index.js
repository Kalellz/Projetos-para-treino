import './index.scss';
import '../common/card.scss'
export default function Eventos(props){
  function usuarioClicou(){
    alert('usuario clicou no botao');
  }
  function usuarioAlterou(e){
    alert('usuario alterou o input, digitando a letra: ' + e.target.value);
  }
  return (
    <div className="page-Eventos">
        <div className={props.Alinhamento}>
        <section className="css-Card">
            <h1>Olá, seja bem-vindo!</h1>
            <div className='inputs-eventos'>
            <input type="text" placeholder='Digite aqui' onChange={usuarioAlterou}/>
            <select>
                <option>
                    Selecione
                </option>
            </select>
            </div>
            <div className="inputs-eventos-radios">
              <input type="radio" name="input-radio" className="input-radio-1"/> Opção 1
              <input type="radio" name="input-radio" className="input-radio-2"/> Opção 2
            </div>
            <div className="inputs-eventos-checkbox">
              <input type="checkbox" className="input-checkbox-1"/> Opção 1
              <input type="checkbox" className="input-checkbox-2"/> Opção 2
            </div>
            <button onClick={usuarioClicou}>
              Okay
            </button>
        </section>
        </div>
    </div>
  );
}

