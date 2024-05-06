import '../../css/style-new-with-filters.css'
import listIcon from "../../img/plastic/list-icon-4.svg";
import PCR from "../../img/PCR.png";



export default function NakonechnikiObject(props) {
    const { title, subtitle, quantity, price } = props;

    return (
    <>
    {/*ОБЪЕКТ*/}
    <div className="fb-line line-v-catalogy plastic-card">
        <div className="fb-line-top">
            <div className="short-card">
                <div className="short-card-icon">
                    <img src={listIcon} alt="наконечник"/>
                </div>

                <div className="short-card-r">
                    <div className="short-card-title">{title}</div>
                    <div className="short-card-subtitle">{subtitle}</div>

                    <div className="short-card-flex">
                        <div className="table-responsive">
                            <table className="card-table">
                                <tr>
                                    <td>Количество (шт/штатив)</td>
                                    <td rowSpan="4">
                                        <button className="card-btn-cart">
                                            <span className="card-btn-r">
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Количество
                                                        (шт/штатив)</span>
                                                    {quantity}
                                                </span>
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Стоимость,
                                                    руб&nbsp;(с НДС)</span>
                                                    {price}
                                                </span>
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Производитель</span>
                                                    BIOFIL
                                                </span>
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Кат.
                                                        номер</span>НФШС-10
                                                </span>
                                            </span>
                                            <span className="cart-icon"></span>
                                        </button>

                                        <div className="plastic-card__licence card-btn_line">
                                            <span className="card-btn-moblabel">Регистрационное
                                                удостоверение</span>
                                            
                                        </div>
                                    </td>

                                    <td rowSpan="4">
                                        <button className="card-btn-cart">
                                            <span className="card-btn-r">
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Количество
                                                        (шт/штатив)</span>
                                                    {quantity}
                                                </span>
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Стоимость,
                                                        руб</span>
                                                    {price}
                                                </span>
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Производитель</span>
                                                    Huida
                                                </span>
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Кат.
                                                        номер</span>НФШС-10
                                                </span>
                                            </span>

                                            <span className="cart-icon"></span>

                                        </button>
                                        <div className="plastic-card__licence card-btn_line">
                                            <span className="card-btn-moblabel">Регистрационное
                                                удостоверение</span>
                                            
                                        </div>
                                    </td>
                                    <td rowSpan="4">
                                        <button className="card-btn-cart">
                                            <span className="card-btn-r">
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Количество
                                                        (шт/штатив)</span>
                                                    {quantity}
                                                </span>
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Стоимость,
                                                        руб</span>
                                                    {price}
                                                </span>
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Производитель</span>
                                                    Service Bio
                                                </span>
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Кат.
                                                        номер</span>НФШС-10
                                                </span>
                                            </span>

                                            <span className="cart-icon"></span>

                                        </button>
                                    </td>
                                    <td rowSpan="4">
                                        <button className="card-btn-cart">
                                            <span className="card-btn-r">
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Количество
                                                        (шт/штатив)</span>
                                                    {quantity}
                                                </span>
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Стоимость,
                                                        руб</span>
                                                    {price}
                                                </span>
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Производитель</span>
                                                    Luxio
                                                </span>
                                                <span className="card-btn_line">
                                                    <span className="card-btn-moblabel">Кат.
                                                        номер</span>НФШС-10
                                                </span>
                                            </span>

                                            <span className="cart-icon"></span>

                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Стоимость (с НДС), ₽ <span className="rub"></span></td>
                                </tr>
                                <tr>
                                    <td>Производитель</td>
                                </tr>
                                <tr>
                                    <td>Кат. номер</td>
                                </tr>
                                <tr>
                                    <td>Регистрационное удостоверение</td>
                                    <td><a href="#" target="_blank">РУ</a></td>
                                    <td><a href="#" target="_blank">РУ</a></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="fb-line-up"></div>
        </div>
        
        {/*дроп-даун-допменю*/}
        <div className="fb-line-body v-catalogy">
            <div className="card-text text-style">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="card-title">Описание</div>
                        <p>Болезнь вызывается парвовирусом (лат. Virus panleukopenia feline). </p>
                        <p>Вирус поражает крипты тонкого кишечника, клетки костного мозга, лимфатическую
                            систему.</p>
                        <div className="card-title">Состав</div>
                        <div className="row">
                            <div className="col-md-2">
                                <img src={PCR} alt="PCR"/>
                            </div>
                            <div className="col-md-10">
                                <ol>
                                    <li>Taq полимераза с “горячим стартом”</li>
                                    <li>Положительный контрольный образец</li>
                                    <li>Комплект для обратной транскрипции</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card-title">Амплификация</div>

                        <div className="model-info">
                            <div className="model-info_line">
                                <div className="model-color green"></div>RAM/ Sybr Green
                            </div>
                            <div className="model-info_line">
                                <div className="model-color red"></div>R6G/ Joe/ Vic/ Tet/ Hex
                            </div>
                            <div className="model-info_dop">* В таблице указано максимальное время
                                проведения амплификации</div>
                        </div>

                        <table className="model-table">
                            <tbody>
                                <tr>
                                    <th>Модель</th>
                                    <th>Каналы</th>
                                    <th>Время*</th>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="model-name">qiagen</div>
                                        <div className="model-name">bio - rad</div>
                                        <div className="model-name">roshe</div>
                                    </td>
                                    <td>
                                        <div className="model-color green"></div>
                                        <div className="model-color red"></div>
                                    </td>
                                    <td>
                                        <div className="model-time">40 МИН</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="model-name">ДТ-Прайм</div>
                                    </td>
                                    <td>
                                        <div className="model-color green"></div>
                                        <div className="model-color red"></div>
                                    </td>
                                    <td>
                                        <div className="model-time">60 МИН</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

            <div className="card-text-r text-style">
                <div className="card-text-r_top">
                    <p>Температура хранения ПЦР комплекта:</p>
                    <p>-20°C </p>
                    <p>Срок годности:</p>
                    <p>12 месяцев</p>
                </div>
                <div href="#card-popup" className="card-text-r_bottom open-link">
                    <div className="card-text-r-link">
                        <span className="card-text-r_plus open-link">Для выделения: </span>
                    </div>
                    <div className="card-text-r-link">
                        <a href=""><strong>Набор "ФБиоНуклео"</strong><br/>
                            на микроцентрифужных колонках</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}