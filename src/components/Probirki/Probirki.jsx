import '../../css/style-new.css'
import ProbirkiFilter from './ProbirkiFilter'
import ProbirkiObject from './ProbirkiObject'


export default function Probirki() {
    
    return ( 
    <>
    <ProbirkiFilter />
    {/*МАССИВ ОБЪЕКТОВ*/}
    <div className="inner-page-wr"> 
        <ProbirkiObject
            title="Пластиковая пробирка на&nbsp;0,1&nbsp;мл в&nbsp;стрипах&nbsp;по&nbsp;8&nbsp;шт, с&nbsp;общей&nbsp;плоской&nbsp;крышкой"
            subtitle="(стерильная, свободная от&nbsp;ДНКаз и&nbsp;РНКаз)"
            quantity={125}
            price={2500}  
        />
        <ProbirkiObject
            title="Пластиковая пробирка на&nbsp;0,2&nbsp;мл, с&nbsp;плоской&nbsp;крышкой"
            subtitle="(стерильная, свободная от&nbsp;ДНКаз и&nbsp;РНКаз)"
            quantity={1000}
            price={2500}  
        />
        <ProbirkiObject
            title="Пластиковая пробирка на&nbsp;1,5&nbsp;мл, коническая"
            subtitle="(нестерильная)"
            quantity={500}
            price={2500}  
        />
        <ProbirkiObject
            title="Центрифужная пробирка на&nbsp;30&nbsp;мл, коническая с&nbsp;юбкой"
            subtitle="(нестерильная)"
            quantity={500}
            price={2500}  
        />
    </div>
    </>
    )
}
