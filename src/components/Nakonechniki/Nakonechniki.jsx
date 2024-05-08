import '../../css/style-new.css'
import NakonechnikiFilter from './NakonechnikiFilter';
import NakonechnikiObject from './NakonechnikiObject';
import { useSelector } from 'react-redux';


// Массив объектов для отображения(мок-заглушка):
const mockNakonechniki = [
    {
        title: "Наконечник до 10 мкл с фильтром в штативе",
        subtitle: "(стерильный, свободный от ДНКаз и РНКаз)",
        quantity: 96,
        price: 509,
        size: 10  // добавляем поле для  фильтрации
    },
    {
        title: "Наконечник до 10 мкл с низкой адгезией Law Retention в штативе",
        subtitle: "(нестерильный)",
        quantity: 96,
        price: 509,
        size: 10  // добавляем поле для фильтрации
    },
    {
        title: "Наконечник до 20 мкл с фильтром в пакете",
        subtitle: "(нестерильный)",
        quantity: 1000,
        price: 509,
        size: 20  // добавляем поле для  фильтрации
    },
    {
        title: "Наконечник до 100 мкл с фильтром в пакете",
        subtitle: "(нестерильный)",
        quantity: 1000,
        price: 509,
        size: 100  // добавляем поле для  фильтрации
    },
    {
        title: "Наконечник до 200 мкл с фильтром в штативе, удлиненный",
        subtitle: "(стерильный, свободный от ДНКаз и РНКаз)",
        quantity: 1000,
        price: 509,
        size: 200  // добавляем поле для  фильтрации
    }
];


export default function Nakonechniki() {
    
const currentFilters = useSelector((state) => state.toFilter.filters);

// Функция для фильтрации:
const filterNakonechniki = (objects) => {
    const { size } = currentFilters;
    
    if (!Object.values(currentFilters).flat().some(value => value)) {
        return objects;
    } else {
        // Фильтрация по полю "size":
        return objects.filter(object => {
            // Проверяем, если для данного размера выбран фильтр
            const isSizeFiltered = size.length === 0 || size.some(selectedSize => selectedSize === object.size);
            return isSizeFiltered;
        });
    }
};
// Фильтруем объекты перед отображением
const filteredObjects =  filterNakonechniki(mockNakonechniki);



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
//CТАРОЕ:
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