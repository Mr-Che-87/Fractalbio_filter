import '../../css/style-new-with-filters.css'
import filter from "../../img/filter/filter.svg";
import checkСlose from "../../img/filter/check-close.svg";
import close from "../../img/filter/close.svg";


import { useDispatch,  useSelector } from 'react-redux';
import { setFilter, resetFilters } from '../../store/filtersSlice'; //грузим экшны

export default function NakonechnikiFilter() {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.toFilter.filters); // получаем текущие фильтры из store (через useSelector)
    
    const handleFilterChange = (filterName, value) => {
        dispatch(setFilter({ filterName, value }));
    };
            
    const handleResetFilters = () => {
        dispatch(resetFilters());
    };


    return (
        <>
        <form className="filter js_filter">   
            <button className="filter__btn-open js_filter-open" type="button">
                Фильтры
                <img src={filter} alt=""/>
            </button>
            <button 
                className="filter__btn-reset js_filter-reset" type="reset"
                onClick={handleResetFilters}
            >
                Сбросить все фильтры
                <img src={checkСlose} alt=""/>
            </button>

            {/*дроп-даун меню*/}
            <div className="filter__dropdown js_filter-dropdown">
                <div className="filter__content">
                    <button className="filter__close js_filter-close" type="button">
                        <img src={close} alt=""/>
                    </button>
                    <div className="filter__wrap">
                        
                        <div className="filter__inner">
                            {/*фильтр ВИД*/}
                            <div className="filter__item">
                                <p className="filter__name">Вид:</p>
                                <div className="filter__item-wrap">
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('typeFil', 'в штативе')}
                                            checked={filters.typeFil['в штативе']}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            в штативе
                                        </div>
                                    </label>
                                    
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('typeFil', 'в пакете')}
                                            checked={filters.typeFil['в пакете']}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            в пакете
                                        </div>
                                    </label>

                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('typeFil', 'в башне')}
                                            checked={filters.typeFil['в башне']}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            в башне
                                        </div>
                                    </label>
                                </div>
                            </div>
 
                            {/*фильтр ОБЪЁМ*/}
                            <div className="filter__item">
                                <p className="filter__name">На&nbsp;объём, мкл:</p>
                                <div className="filter__item-wrap">
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('sizeFil', 10)} //обработчик клика
                                            checked={filters.sizeFil[10]} //проверка наличия значения в массиве фильтров
                                        />
                                        <div className="filter__checkbox-wrap">
                                            10
                                        </div>
                                    </label>
                                    
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('sizeFil', 20)}
                                            checked={filters.sizeFil[20]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            20
                                        </div>
                                    </label>
                                    
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('sizeFil', 100)}
                                            checked={filters.sizeFil[100]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            100
                                        </div>
                                    </label>
                                    
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('sizeFil', 200)}
                                            checked={filters.sizeFil[200]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            200
                                        </div>
                                    </label>
                                    
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('sizeFil', 300)}
                                            checked={filters.sizeFil[300]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            300
                                        </div>
                                    </label>
                                    
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('sizeFil', 1000)}
                                            checked={filters.sizeFil[1000]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            1000
                                        </div>
                                    </label>
                                    
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('sizeFil', 1250)}
                                            checked={filters.sizeFil[1250]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            1250
                                        </div>
                                    </label>
                                    
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('sizeFil', 5000)}
                                            checked={filters.sizeFil[5000]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            5000
                                        </div>
                                    </label>
                                    
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('sizeFil', 10000)}
                                            checked={filters.sizeFil[10000]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            10000
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="filter__inner">
                            {/*чекбокс СТЕРИЛЬНОСТЬ*/}
                            <div className="filter__item filter__item--sm">
                                <p className="filter__name">Стерильность:</p>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input 
                                        className="visually-hidden" type="checkbox" name=""
                                        onChange={() => handleFilterChange('стерильность', true)}
                                        checked={filters.стерильность}
                                    />  
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span> {/*галочка*/}
                                    </div>
                                </label>
                            </div>

                            {/*чекбокс ФИЛЬТР*/}
                            <div className="filter__item filter__item--sm">
                                <p className="filter__name">Фильтр:</p>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span> {/*галочка*/}
                                    </div>
                                </label>
                            </div>
                        </div>

                        {/*фильтр КОЛИЧЕСТВО ШТ*/}
                        <div className="filter__item">
                            <p className="filter__name">Количество шт/уп:</p>
                            <div className="filter__item-wrap filter__item-wrap--gap">
                                <label className="filter__checkbox">
                                    <input 
                                        className="visually-hidden" type="checkbox" name="" 
                                        onChange={() => handleFilterChange('quantityFil', 96)}
                                        checked={filters.quantityFil[96]}
                                    />  {/* было disabled*/ }
                                    <div className="filter__checkbox-wrap">
                                        96
                                    </div>
                                </label>
                                
                                <label className="filter__checkbox">
                                    <input 
                                        className="visually-hidden" type="checkbox" name="" 
                                        onChange={() => handleFilterChange('quantityFil', 100)}
                                        checked={filters.quantityFil[100]}
                                    /> {/*было disabled*/ }
                                    <div className="filter__checkbox-wrap">
                                        100
                                    </div>
                                </label>
                                
                                <label className="filter__checkbox">
                                    <input 
                                        className="visually-hidden" type="checkbox" name=""
                                        onChange={() => handleFilterChange('quantityFil', 250)}
                                        checked={filters.quantityFil[250]}

                                     
                                    />
                                    <div className="filter__checkbox-wrap">
                                        250
                                    </div>
                                </label>
                                
                                <label className="filter__checkbox">
                                    <input 
                                        className="visually-hidden" type="checkbox" name=""
                                        onChange={() => handleFilterChange('quantityFil', 480)}
                                        checked={filters.quantityFil[480]}
                                    />
                                    <div className="filter__checkbox-wrap">
                                        480
                                    </div>
                                </label>

                                <label className="filter__checkbox">
                                    <input 
                                        className="visually-hidden" type="checkbox" name=""
                                        onChange={() => handleFilterChange('quantityFil', 500)}
                                        checked={filters.quantityFil[500]}
                                    />
                                    <div className="filter__checkbox-wrap">
                                        500
                                    </div>
                                </label>

                                <label className="filter__checkbox">
                                    <input 
                                        className="visually-hidden" type="checkbox" name=""
                                        onChange={() => handleFilterChange('quantityFil', 960)}
                                        checked={filters.quantityFil[960]}
                                    />
                                    <div className="filter__checkbox-wrap">
                                        960
                                    </div>
                                </label>

                                <label className="filter__checkbox">
                                    <input 
                                        className="visually-hidden" type="checkbox" name=""
                                        onChange={() => handleFilterChange('quantityFil', 1000)}
                                        checked={filters.quantityFil[1000]}
                                    />
                                    <div className="filter__checkbox-wrap">
                                        1000
                                    </div>
                                </label>
                            </div>
                        </div>


                        {/*фильтр ФУНКЦИИ*/}
                        <div className="filter__item">
                            <p className="filter__name">Функции:</p>
                            <div className="filter__item-wrap filter__item-wrap--mob-col">
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/> {/*было disabled*/ }
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span> {/*галочка*/}
                                        удлиненные
                                    </div>
                                </label>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span> {/*галочка*/}
                                        c низкой адгезией Law Retention
                                    </div>
                                </label>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span> 
                                        цветные
                                    </div>
                                </label>
                            </div>
                        </div>

                    </div>


                    <button className="filter__btn js_filter-btn" type="submit">Применить</button>
                </div>
            </div>
        </form>
        </>
    )
} 