import '../../css/style-new-with-filters.css'
import dispenser from "../../img/plastic/dispenser.svg";
import dispenserHidden from "../../img/plastic/dispenser-1.svg";





export default function DozatoriObject(props) {
    const { title, quantity, price } = props; 

    return (
    <>
     {/*ОБЪЕКТ*/}
	 <div className="fb-line line-v-catalogy plastic-card" data-id="549">
						<div className="fb-line-top">
							<div className="short-card">
								<div className="short-card-icon">
									<img src={dispenser} className="hidden-main-icon-card" />
									<div className="hidden-icon-card">
										<img src={dispenserHidden} />
									</div>
									<div className="short-card-icon-badge"></div>
								</div>
								<div className="short-card-icon-wr"></div>
								<div className="short-card-r">
									<div className="short-card-title">{title}</div>
									<div className="short-card-flex">
										<div className="table-responsive">
											<table className="card-table">
												<tbody>
													<tr>
														<td>Количество (шт/ уп)</td>
														<td rowspan="4">
															<a href="/emarket/basket/put/element/549/?offer_id=446&amp;amount=1" 			
																data-id="549"
																data-offer="446" className="card-btn-cart">
															<span className="card-btn-r">
																<span className="card-btn_line">
																	<span className="card-btn-moblabel">Количество (шт/
																			уп)
																	</span>
																{quantity}
																</span>
																<span className="card-btn_line">
																	<span className="card-btn-moblabel">Стоимость, руб&nbsp;(с НДС)
																	</span>
																{price}
																</span>

																<span className="card-btn_line">
																	<span className="card-btn-moblabel">Бренд</span>
																BIOFIL
																</span>
																<span className="card-btn_line"><span className="card-btn-moblabel">Кат.
																			номер</span>SPA200125</span></span><span className="cart-icon"></span></a>
															<div className="plastic-card__licence card-btn_line">
																<span className="card-btn-moblabel">Регистрационное удостоверение</span><a
																	href="/images/plastik/brands/reg_certif_jet_biofil.pdf" target="_blank">РУ</a>
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
											<p>Дозатор механический, одноканальный, переменного объема, 0,1-2,5 мкл</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
    </>
    )
}