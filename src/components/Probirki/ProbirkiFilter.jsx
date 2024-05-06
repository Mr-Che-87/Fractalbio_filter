import '../../css/style-new-with-filters.css'
import filter from "../../img/filter/filter.svg";
import checkСlose from "../../img/filter/check-close.svg";
import close from "../../img/filter/close.svg";


export default function ProbirkiFilter() {

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
                                        в стрипе
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        микропробирки
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        криопробирки
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        центрифужные
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        титр-трубки
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="filter__item">
                            <p className="filter__name">Объем, мл:</p>
                            <div className="filter__item-wrap">
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        0,1
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        0,2
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        0,5
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        1,2
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        1,5
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
                                        15,0
                                    </div>
                                </label>
                                <label className="filter__checkbox">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        30,0
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
                                        225,0
                                    </div>
                                </label>
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
                                <p className="filter__name">Юбка:</p>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="filter__inner">
                            <div className="filter__item">
                                <p className="filter__name">Цвет:</p>
                                <div className="filter__item-wrap filter__item-wrap--mob-col">
                                    <label className="filter__checkbox filter__checkbox--mark">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            <span className="filter__checkbox-el"></span>
                                            белые
                                        </div>
                                    </label>
                                    <label className="filter__checkbox filter__checkbox--mark">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            <span className="filter__checkbox-el"></span>
                                            бесцветные
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
                                            125
                                        </div>
                                    </label>
                                    <label className="filter__checkbox">
                                        <input className="visually-hidden" type="checkbox" name=""/>
                                        <div className="filter__checkbox-wrap">
                                            180
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
                                            250
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
                                            1000
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>



                        <div className="filter__item">
                            <p className="filter__name">Тип крышки:</p>
                            <div className="filter__item-wrap filter__item-wrap--mob-col">
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name="" disabled/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                        Easy Flip
                                    </div>
                                </label>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                        с уплотнителем
                                    </div>
                                </label>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                        крышка на стрип
                                    </div>
                                </label>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                        плоская
                                    </div>
                                </label>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                        выпуклая
                                    </div>
                                </label>
                                <label className="filter__checkbox filter__checkbox--mark">
                                    <input className="visually-hidden" type="checkbox" name=""/>
                                    <div className="filter__checkbox-wrap">
                                        <span className="filter__checkbox-el"></span>
                                        цветная
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