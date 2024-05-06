import '../../css/style-new-with-filters.css'
import filter from "../../img/filter/filter.svg";
import checkСlose from "../../img/filter/check-close.svg";
import close from "../../img/filter/close.svg";


export default function DozatoriFilter() {

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
                                        дозатор
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        ванночка для дозатора
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="filter__item">
                            <p className="filter__name">Каналы (шт):</p>
                            <div className="filter__item-wrap">
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        1
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        8
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        12
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="filter__item">
                            <p className="filter__name">На объем, мкл:</p>
                            <div className="filter__item-wrap filter__item-wrap--gap">
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name="" disabled/>
                                    <div className="filter__checkbox-wrap">
                                        0,1-2,5
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name="" disabled/>
                                    <div className="filter__checkbox-wrap">
                                        0,5-10
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        2-20
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        5-50
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        10-100
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        20-200
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        30-300
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        100-1000
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