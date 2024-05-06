import '../../css/style-new-with-filters.css';
import plasticPcrPlatesDefault from "../../img/plastic/80x80_plastic_pcr_plates-default.svg";
import plasticPcrPlatesHover from "../../img/plastic/80x80_plastic_pcr_plates-hover.svg";


export default function OtherPlasticObject(props) {
    const { title, subtitle, quantity, price } = props;

    return (
        <>
		{/*ОБЪЕКТ*/}
		<div className="fb-line line-v-catalogy plastic-card" data-id="511">
			<div className="fb-line-top">
				<div className="short-card">
					<div className="short-card-icon">
					<img src={plasticPcrPlatesDefault} 		    
					    className="hidden-main-icon-card" />
					<div className="hidden-icon-card">
						<img src={plasticPcrPlatesHover} />
						</div>
						<div className="short-card-icon-badge"></div>
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
											<td>Количество (шт/ уп)</td>
											<td rowspan="4">
												<a href="/emarket/basket/put/element/511/?offer_id=406&amp;amount=1" data-id="511"
													data-offer="406" className="card-btn-cart">
												<span className="card-btn-r">
													<span									className="card-btn_line">
														<span className="card-btn-moblabel">Количество (шт/
																уп)
														</span>
													{quantity}
													</span>
													<span className="card-btn_line">
														<span className="card-btn-moblabel">
																Стоимость, руб&nbsp;(с НДС)
														</span>
													{price}
													</span>
													
													<span className="card-btn_line"><span
																className="card-btn-moblabel">Бренд</span>Luxico</span><span
															className="card-btn_line"><span className="card-btn-moblabel">Кат.
																номер</span>LUX-PLT</span></span><span className="cart-icon"></span></a>
												<div className="plastic-card__licence card-btn_line">
													<span className="card-btn-moblabel">Регистрационное удостоверение</span><a href=""
														target="_blank">РУ</a>
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
								<p>· Нестерильные<br />· Количество лунок в плашке: 96<br />· Объем лунки плашки: 0,2 мл<br />· Формат
									платформы: без юбки устойчивости<br />· Материал изготовления: полипропилен<br />· Фасовка: 25 шт/
									уп</p>
								<p>Для закрытия планшета можно использовать оптически прозрачную пленку</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </>
    );
}
