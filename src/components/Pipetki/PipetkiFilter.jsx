import '../../css/style-new-with-filters.css'
import filter from "../../img/filter/filter.svg";
import checkСlose from "../../img/filter/check-close.svg";
import close from "../../img/filter/close.svg";


export default function PipetkiFilter() {

    return (
        <>
        <form className="filter js_filter">
            <button className="filter__btn-open js_filter-open" type="button">
                Фильтры
                <img src={filter} alt="" />
            </button>
            <button className="filter__btn-reset js_filter-reset" type="reset">
                Сбросить все фильтры
                <img src={checkСlose} alt="" />
            </button>

            <div className="filter__dropdown js_filter-dropdown">
                <div className="filter__content">
                    <button className="filter__close js_filter-close" type="button">
                        <img src={close} alt="" />
                    </button>

                    <div className="filter__wrap">
                        <div className="filter__item">
                            <p className="filter__name">Вид:</p>
                            <div className="filter__item-wrap">
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name="" />
                                    <div className="filter__checkbox-wrap">
                                        Пипетки Пастера
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name="" />
                                    <div className="filter__checkbox-wrap">
                                        Серологические пипетки
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="filter__inner">
                            <div className="filter__item">
                                <p className="filter__name">Объем, мл:</p>
                                <div className="filter__item-wrap">
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            0,2
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            1,0
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            2,0
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            3,0
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            5,0
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            10,0
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            25,0
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            50,0
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            100,0
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="filter__item filter__item--sm">
                                <p className="filter__name">Стерильность:</p>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="filter__item">
                            <p className="filter__name">Функция:</p>
                            <div className="filter__item-wrap filter__item-wrap--mob-col">
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                        с широким носиком
                                    </div>
                                </label>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                        с вытянутым носиком
                                    </div>
                                </label>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                        удлиненные
                                    </div>
                                </label>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                        полный слив
                                    </div>
                                </label>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                        мелкая градуировка
                                    </div>
                                </label>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                        крупная градуировка
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <button classNameName="filter__btn js_filter-btn" type="submit">Применить</button>
                </div>
            </div>
        </form>
        </>
    )
} 