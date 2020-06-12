import React, { useState, useEffect } from 'react';
import * as Styles from './PromotionPage.styles.jsx';

import { getPromotionsData }  from '../../controller/fetchInfo';

function PromotionPage(){
	const [promotionList, setPromotionList] = useState([]);

	const getPromotion = async () => {
		const data = await getPromotionsData();
		setPromotionList(data);
	};

	useEffect(() => {
		getPromotion();
	}, []);

	return(
		<Styles.Container>
			<Styles.Nav>
				{/* <span>Link Prueba</span>
				<span>Buscador Prueba</span> */}
			</Styles.Nav>
			<Styles.PromotionList>
				{
					promotionList.map(promo => (
						<Styles.PromotionItem key={promo.promotionID}>
							{promo.description}
						</Styles.PromotionItem>
					))
				}
			</Styles.PromotionList>
			<div style={{'height': '60px', 'width': '100vw'}} ></div>
		</Styles.Container>
	);
}

export default PromotionPage;