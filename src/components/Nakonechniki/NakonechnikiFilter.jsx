import '../../css/style-new-with-filters.css'
import filter from "../../img/filter/filter.svg";
import checkСlose from "../../img/filter/check-close.svg";
import close from "../../img/filter/close.svg";


export default function NakonechnikiFilter() {

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
                        <div className="filter__inner">
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

                            <div className="filter__item">
                                <p className="filter__name">На&nbsp;объем, мкл:</p>
                                <div className="filter__item-wrap">
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            10
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            20
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            100
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            200
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            300
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            1000
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            1250
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            5000
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            10000
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="filter__inner">
                            <div className="filter__item filter__item--sm">
                                <p className="filter__name">Стерильность:</p>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name="" disabled/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                    </div>
                                </label>
                            </div>
                            <div className="filter__item filter__item--sm">
                                <p className="filter__name">Фильтр:</p>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="filter__item">
                            <p className="filter__name">Количество шт/уп:</p>
                            <div className="filter__item-wrap filter__item-wrap--gap">
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name="" disabled/>
                                    <div className="filter__checkbox-wrap">
                                        96
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name="" disabled/>
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

                        <div className="filter__item">
                            <p className="filter__name">Функции:</p>
                            <div className="filter__item-wrap filter__item-wrap--mob-col">
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name="" disabled/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                        удлиненные
                                    </div>
                                </label>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
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