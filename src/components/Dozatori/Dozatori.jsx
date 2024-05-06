import '../../css/style-new.css'
import DozatoriFilter from './DozatoriFilter'
import DozatoriObject from './DozatoriObject'


export default function Dozatori() {
    
    return ( 
    <>
    <DozatoriFilter />
    {/*МАССИВ ОБЪЕКТОВ*/}
        <div className="inner-page-wr">
        <DozatoriObject
            title="Дозатор механический, одноканальный, на&nbsp;0,1-2,5&nbsp;мкл"
            quantity={1}
            price={6500}  
        />
        <DozatoriObject
            title="Дозатор механический, 8-канальный, на&nbsp;0,5-10&nbsp;мкл"
            quantity={1}
            price={6500}  
        />
        <DozatoriObject
            title="Дозатор механический, 12-канальный, на&nbsp;30-300&nbsp;мкл"
            quantity={1}
            price={6500}  
        />
        <DozatoriObject
            title="Ванночки для&nbsp;дозаторов, 25&nbsp;мл"
            quantity={5}
            price={6500}  
        />
        <DozatoriObject
            title="Ванночки для&nbsp;дозаторов, 100&nbsp;мл"
            quantity={5}
            price={6500}  
        />
    </div>
    </>
    )
}
