import '../../css/style-new.css'
import plasticTube from "../../img/plastic/80x80_plastic_tube.svg";
import plasticTubeAct from "../../img/plastic/80x80_plastic_tube_act.svg";



export default function ProbirkiObject(props) {
    const { title, subtitle, quantity, price } = props;  
	
    return (
    <>
     {/*ОБЪЕКТ*/}
    <div className="fb-line line-v-catalogy plastic-card" data-id="506">
						<div className="fb-line-top">
							<div className="short-card">
								<div className="short-card-icon">
									<img src={plasticTube}
                                     className="hidden-main-icon-card" />
									<div className="hidden-icon-card">
                                        <img src={plasticTubeAct} />
                                    </div>
									<div className="short-card-icon-badge">
                                        <span>STERILE</span>
                                    </div>
								</div>
								<div className="short-card-icon-wr"></div>
								<div className="short-card-r">
									<div className="short-card-title">{title}</div>
									<div className="short-card-subtitle">{subtitle}</div>
									<div className="short-card-flex">
										<div className="table-responsive">
											<table className="card-table">
												<tbody>
													<tr>
														<td>количество (шт/ пакет) </td>
														<td rowspan="4">
															<a href="/emarket/basket/put/element/506/?offer_id=400&amp;amount=1" data-id="506"
															data-offer="400" className="card-btn-cart">
                                                                <span className="card-btn-r">
                                                                <span className="card-btn_line">
                                                                    <span className="card-btn-moblabel">количество (шт/ пакет)</span>
                                                                {quantity}
                                                                </span>
                                                                <span className="card-btn_line">
                                                                    <span className="card-btn-moblabel">Стоимость, руб (с НДС)
																	</span>
                                                                {price}
                                                                </span>
                                                                <span className="card-btn_line">
                                                                    <span className="card-btn-moblabel">Бренд</span>
                                                                BIOFIL
                                                                </span>
                                                                <span className="card-btn_line">
                                                                    <span className="card-btn-moblabel">Кат.номер</span>
                                                                PCR000200
                                                                </span>
                                                                </span>
                                                                <span className="cart-icon"></span>
                                                            </a>
															<div className="plastic-card__licence card-btn_line">
																<span className="card-btn-moblabel">Регистрационное удостоверение</span>
                                                                <a							href="/images/plastik/brands/reg_certif_jet_biofil.pdf" target="_blank">РУ</a>
															</div>
														</td>
													</tr>
													<tr>
														<td>
														Стоимость, <span className="rub"></span>
															(с НДС)
														</td>
													</tr>
													<tr>
														<td>Бренд</td>
													</tr>
													<tr>
														<td>Кат. номер</td>
													</tr>
													<tr>
														<td>Регистрационное удостоверение</td>
														<td><a href="/images/plastik/brands/reg_certif_jet_biofil.pdf" className="doc-link"
														target="_blank">РУ</a></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							<div className="fb-line-up"></div>
						</div>
						<div className="fb-line-body v-catalogy">
							<div className="v-catalogy-wrapper">
								<div className="card-text card-text--simple card-text--one-column-list card-text--fullwidth text-style">
									<div className="row">
										<div className="col-lg-6 col-md-12">
											<div className="card-title">Описание</div>
											<p>Пластиковая пробирка на 0,2 мл, с плоской прозрачной крышкой, стерильная, свободная от ДНКаз и
												РНКаз, 1000 шт в пакете</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
    </>
    )
}