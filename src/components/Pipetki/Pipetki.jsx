import '../../css/style-new.css'
import PipetkiFilter from './PipetkiFilter'
import PipetkiObject from './PipetkiObject'


export default function Pipetki() {
    
    return ( 
    <>
    <PipetkiFilter />
    {/*МАССИВ ОБЪЕКТОВ*/}
    <div className="inner-page-wr">
        <PipetkiObject 
            title="Пипетки Пастера 0,2&nbsp;мл"
            subtitle="(Стерильные)"
            quantity={50}
            price={10100} 
        />
        <PipetkiObject 
            title="Пипетки Пастера 1&nbsp;мл"
            subtitle="(Нестерильные)"
            quantity={100}
            price={10100} 
        />
        <PipetkiObject 
            title="Пипетки Пастера 3&nbsp;мл, удлинённые"
            subtitle="(Стерильные)"
            quantity={1000}
            price={10100} 
        />
        <PipetkiObject 
            title="Серологические пипетки 1&nbsp;мл"
            subtitle="(Стерильные)"
            quantity={25}
            price={10100} 
        />
         <PipetkiObject 
            title="Серологические пипетки 10&nbsp;мл, с вытянутым&nbsp;носиком"
            subtitle="(Стерильные)"
            quantity={200}
            price={10100} 
        />
    </div>
    </>
    )
}
