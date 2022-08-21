import './index.scss'
import Card from './cards'
export default function Componentes(){
    return(
        <div className="page-Componentes2">
            <div>
            <Card nome="Bruno" idade="33" nascimento="2022" hobby="Codar"/>
            <Card nome="Andréia" idade="56"  nascimento="1992" hobby="Namorar"/>
            </div>
            <div className='cards-2'>
            <Card nome="Julia" idade="11" nascimento="1972" hobby="Lutar"/>
            <Card nome="Kalel" idade="92" nascimento="2000" hobby="Lindar"/>
            </div>
        </div>
    )
}