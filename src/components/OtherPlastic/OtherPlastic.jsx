import '../../css/style-new.css'
import OtherPlasticFilter from './OtherPlasticFilter'
import OtherPlasticObject from './OtherPlasticObject'


export default function OtherPlastic() {
    
    return ( 
    <>
    <OtherPlasticFilter />
    {/*МАССИВ ОБЪЕКТОВ*/}
    <div className="inner-page-wr">
        <OtherPlasticObject
            title="ПЦР&nbsp;плашки на&nbsp;96&nbsp;лунок, 0,2&nbsp;мл"
            subtitle="(нестерильные)"
            quantity={20}
            price={1200} 
        />
        <OtherPlasticObject
            title="Пленки для ПЦР&nbsp;плашек"
            quantity={100}
            price={1200} 
        />
        <OtherPlasticObject
            title="Планшет глубоколуночный, 96&nbsp;лунок, 10&nbsp;шт/уп"
            subtitle="(стерильный)"
            quantity={10}
            price={1200} 
        />
        <OtherPlasticObject
            title="Флакон культуральный 600 мл"
            subtitle="(стерильный)"
            quantity={5}
            price={1200} 
        />
    </div>
    </>
    )
}
