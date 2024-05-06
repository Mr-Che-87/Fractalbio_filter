import '../../css/style-new-with-filters.css'
import filter from "../../img/filter/filter.svg";
import checkСlose from "../../img/filter/check-close.svg";
import close from "../../img/filter/close.svg";


export default function OtherPlasticFilter() {
    
    return (
        <>
        <form className="filter js_filter">   
            <button className="filter__btn-open js_filter-open" type="button">
                Фильтры
                <img src={filter} alt=""/>
            </button>
            <button className="filter__btn-reset js_filter-reset" type="reset">
                Сбросить все фильтры
                <img src={checkСlose} alt=""/>
            </button>

            <div className="filter__dropdown js_filter-dropdown">
                <div className="filter__content">
                    <button className="filter__close js_filter-close" type="button">
                        <img src={close} alt=""/>
                    </button>

            <div className="filter__wrap">
                        <div className="filter__item">
                            <p className="filter__name">Вид:</p>
                            <div className="filter__item-wrap">
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        титр-трубки
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        ПЦР плашка
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        пленка для плашек
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        планшет глубоколуночный
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        планшет иммунологический
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        планшет для культивирования
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        мембранные вставки
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        матрасы (пакеты) для культивирования
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        флакон культуральный
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        пестик для сеточки сепарирующей клетки
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        роллерная бутыль
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