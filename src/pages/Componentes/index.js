import './index.scss'
import '../common/card-retangular.scss'
import icon from './icon.svg'
export default function Componentes(props){
    return(
        <div className="page-Componentes">
            <section className="Card-Retangular">
            <h1 className='Componente-titles-secoes'>Seção 1</h1>
            <div className={props.Alinhamento}>
                <p className='Componente-paragraph-secoes'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.
                </p>
                <img src={icon}/>
            </div>
            </section>

            <section className="Card-Retangular">
            <h1 className='Componente-titles-secoes'>Seção 2</h1>
            <div className={props.Alinhamento2}>
                <p className='Componente-paragraph-secoes'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.
                </p>
                <img src={icon}/>
            </div>
            </section>

            <section className="Card-Retangular">
            <h1 className='Componente-titles-secoes-3'>Seção 3</h1>
            <div className={props.Alinhamento3}>
                <p className='Componente-paragraph-secoes'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex odio, varius non maximus at, consectetur non purus. Ut nec ullamcorper nisl, non porttitor dui.
                </p>
                <img src={icon}/>
            </div>
            </section>
        </div>
    )
}