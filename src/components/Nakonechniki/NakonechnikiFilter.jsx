import '../../css/style-new-with-filters.css'
import filter from "../../img/filter/filter.svg";
import checkСlose from "../../img/filter/check-close.svg";
import close from "../../img/filter/close.svg";


import { useDispatch,  useSelector } from 'react-redux';
import { setFilter, resetFilters } from '../../store/filtersSlice'; //грузим экшны

export default function NakonechnikiFilter() {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.toFilter.filters); // получаем текущие фильтры из Redux store

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
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            в штативе
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            в пакете
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
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
                                            onChange={() => handleFilterChange('size', 10)}
                                            checked={filters.size[10]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            10
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('size', 20)}
                                            checked={filters.size[20]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            20
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('size', 100)}
                                            checked={filters.size[100]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            100
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('size', 200)}
                                            checked={filters.size[200]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            200
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('size', 300)}
                                            checked={filters.size[300]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            300
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('size', 1000)}
                                            checked={filters.size[1000]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            1000
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('size', 1250)}
                                            checked={filters.size[1250]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            1250
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('size', 5000)}
                                            checked={filters.size[5000]}
                                        />
                                        <div className="filter__checkbox-wrap">
                                            5000
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input 
                                            className="visually-hidden" type="checkbox" name=""
                                            onChange={() => handleFilterChange('size', 10000)}
                                            checked={filters.size[10000]}
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
                                    <input className="visually-hidden" type="checkbox" name=""/>  {/*было disabled*/ }
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
                                    <input className="visually-hidden" type="checkbox" name="" />  {/*было disabled*/ }
                                    <div className="filter__checkbox-wrap">
                                        96
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name="" /> {/*было disabled*/ }
                                    <div className="filter__checkbox-wrap">
                                        100
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        250
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        480
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        500
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        960
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
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