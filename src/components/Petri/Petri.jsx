import '../../css/style-new.css'
import PetriFilter from './PetriFilter'
import PetriObject from './PetriObject'


export default function Petri() {
    
    return ( 
    <>
    <PetriFilter />
    {/*МАССИВ ОБЪЕКТОВ*/}
    <div className="inner-page-wr">
        <PetriObject
            title="Чашки Петри, ∅&nbsp;35&nbsp;мм"
            quantity={10}
            price={140}  
        />
        <PetriObject
            title="Чашки Петри, ∅&nbsp;60&nbsp;мм"
            quantity={10}
            price={140}  
        />
        <PetriObject
            title="Чашки Петри, ∅&nbsp;70&nbsp;мм"
            quantity={20}
            price={140}  
        />
        <PetriObject
            title="Чашки Петри, ∅&nbsp;150&nbsp;мм"
            quantity={1}
            price={140}  
        />
    </div>
    </>
    )
}
