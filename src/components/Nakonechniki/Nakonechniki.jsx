import '../../css/style-new.css'
import NakonechnikiFilter from './NakonechnikiFilter';
import NakonechnikiObject from './NakonechnikiObject';
import { useSelector } from 'react-redux';


// Массив объектов для отображения(мок-заглушка):
const mockNakonechniki = [
    {
        title: "Наконечник до 10 мкл с фильтром в штативе",    //отсюда выцеплять всё, включая size
        subtitle: "(стерильный, свободный от ДНКаз и РНКаз)",
        quantity: 96,
        price: 509,  
        size: 10  // добавил доп-поле для  фильтрации
    },
    {
        title: "Наконечник до 10 мкл с низкой адгезией Law Retention в штативе",
        subtitle: "(нестерильный)",
        quantity: 96,
        price: 509,
        size: 10  // добавил доп-поле для  фильтрации
    },
    {
        title: "Наконечник до 20 мкл с фильтром в пакете",
        subtitle: "(нестерильный)",
        quantity: 1000,
        price: 509,
        size: 20  // добавил доп-поле для  фильтрации
    },
    {
        title: "Наконечник до 100 мкл с фильтром в пакете",
        subtitle: "(нестерильный)",
        quantity: 1000,
        price: 509,
        size: 100  // добавил доп-поле для  фильтрации
    },
    {
        title: "Наконечник до 200 мкл с фильтром в штативе, удлиненный",
        subtitle: "(стерильный, свободный от ДНКаз и РНКаз)",
        quantity: 1000,
        price: 509,
        size: 200  // добавил доп-поле для  фильтрации
    }
];


export default function Nakonechniki() {
    
const currentFilters = useSelector((state) => state.toFilter.filters);  //доступ к фильтрам из store (через useSelector)


// Функция для фильтрации:
const filterNakonechniki = (objects) => {
    const { typeFil, sizeFil, quantityFil, стерильность } = currentFilters;  //деструктуризируем отдельные пункты фильтра
    
    const typeFilValues = Object.keys(typeFil).filter(key => typeFil[key]); //преобразуем объект "вид/typeFil" в массив строк
    const regex = new RegExp(typeFilValues.join('|'), 'i'); //регулярное выражение для поиска словосочетания внутри title

    // Если хотя бы один из фильтров не пустой, применяем фильтрацию:
    if (sizeFil.length > 0 || quantityFil.length > 0 || typeFilValues.length > 0) {
        return objects.filter((object) =>
            (sizeFil.length === 0 || sizeFil.includes(object.size)) &&
            (quantityFil.length === 0 || quantityFil.includes(object.quantity)) &&
            (typeFilValues.length === 0 || regex.test(object.title))
        );
    }
    //Если все фильтры пустые, возвращаем все объекты:
    return objects;
};
/*
//СТАРОЕ: для числовых  size и quantity
const filterNakonechniki = (objects) => {
    const { sizeFil, quantityFil } = currentFilters;

    //Фильтруем только если есть какие-то фильтры
    if (sizeFil.length > 0 || quantityFil.length > 0) {
        return objects.filter(object =>
            (sizeFil.length === 0 || sizeFil.includes(object.size)) &&
            (quantityFil.length === 0 || quantityFil.includes(object.quantity))
        );
    }

    //Если нет фильтров, возвращаем все объекты:
    return objects;
};
*/

//коннектим функцию фильтрации с массивом объектов и оборачиваем это всё в переменную filteredObjects:
const filteredObjects = filterNakonechniki(mockNakonechniki);



    return (
        <>
            <NakonechnikiFilter />
            <div className="inner-page-wr">
                {/* Мапим отфильтрованные объекты для отображения */}
                {filteredObjects.map((object, index) => (
                    <NakonechnikiObject
                        key={index}
                        title={object.title}
                        subtitle={object.subtitle}
                        quantity={object.quantity}
                        price={object.price}
                        size={object.size}
                    />
                ))}
            </div>
        </>
    );
}








//объект из админки https://fractalbio.com/admin/catalog/tree/:
/*
Undefined result for catalog::object() method.

<udata xmlns:xlink="http://www.w3.org/TR/xlink" module="catalog" method="object" generation-time="0.002421">
  <id>427</id>
  <name>Наконечник до 10 мкл в штативе</name>
  <alt_name>n10</alt_name>
  <link>
</udata>
*/


/*
//CТАРОЕ(без фильтрации):
import '../../css/style-new.css'
import NakonechnikiFilter from './NakonechnikiFilter';
import NakonechnikiObject from './NakonechnikiObject';

export default function Nakonechniki() {
    
    return (
    <>
    <NakonechnikiFilter />
   
    <div className="inner-page-wr">
    <NakonechnikiObject
        title="Наконечник до 10 мкл с фильтром в штативе"
        subtitle="(стерильный, свободный от ДНКаз и РНКаз)"
        quantity={96}
        price={509} 
    />
    <NakonechnikiObject
        title="Наконечник до 10 мкл с низкой адгезией Law Retention в штативе"
        subtitle="(нестерильный)"
        quantity={96}
        price={509} 
    />
    <NakonechnikiObject
        title="Наконечник до 20 мкл с фильтром в пакете"
        subtitle="(нестерильный)"
        quantity={1000}
        price={509} 
    />
    <NakonechnikiObject
        title="Наконечник до 100 мкл с фильтром в пакете"
        subtitle="(нестерильный)"
        quantity={1000}
        price={509} 
    />
    <NakonechnikiObject
        title="Наконечник до 200 мкл с фильтром в штативе, удлиненный"
        subtitle="(стерильный, свободный от ДНКаз и РНКаз)"
        quantity={96}
        price={509} 
    />
    
    </div>
    </>
    )
}
*/