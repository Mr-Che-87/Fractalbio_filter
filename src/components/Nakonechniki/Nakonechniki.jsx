import '../../css/style-new.css'
import NakonechnikiFilter from './NakonechnikiFilter';
import NakonechnikiObject from './NakonechnikiObject';




export default function Nakonechniki() {
    
    return (
    <>
    <NakonechnikiFilter />
    {/*МАССИВ ОБЪЕКТОВ*/}
    <div className="inner-page-wr">
    <NakonechnikiObject
        title="Наконечник до&nbsp;10&nbsp;мкл с&nbsp;фильтром в&nbsp;штативе"
        subtitle="(стерильный, свободный от&nbsp;ДНКаз и&nbsp;РНКаз)"
        quantity={96}
        price={509} 
    />
    <NakonechnikiObject
        title="Наконечник до&nbsp;10&nbsp;мкл с&nbsp;низкой&nbsp;адгезией Law&nbsp;Retention в&nbsp;штативе"
        subtitle="(нестерильный)"
        quantity={96}
        price={509} 
    />
    <NakonechnikiObject
        title="Наконечник до&nbsp;20&nbsp;мкл с&nbsp;фильтром в&nbsp;пакете"
        subtitle="(нестерильный)"
        quantity={1000}
        price={509} 
    />
    <NakonechnikiObject
        title="Наконечник до&nbsp;100&nbsp;мкл с&nbsp;фильтром в&nbsp;пакете"
        subtitle="(нестерильный)"
        quantity={1000}
        price={509} 
    />
    <NakonechnikiObject
        title="Наконечник до&nbsp;200&nbsp;мкл с&nbsp;фильтром в&nbsp;штативе, удлиненный"
        subtitle="(стерильный, свободный от&nbsp;ДНКаз и&nbsp;РНКаз)"
        quantity={96}
        price={509} 
    />
    
    </div>
    </>
    )
}