import React, { useState, useEffect } from 'react';
import * as Styles from './PromotionPage.Style.jsx';

const PromotionURL = 'https://genericapiv1.azurewebsites.net/v1/shop/promotions';

function PromotionPage(){
	const [promotionList, setPromotionList] = useState([]);

	const getPromotion = async () => {
		const response = await fetch(PromotionURL);
		const data = await response.json();
		console.log(data);
		setPromotionList(data);
		console.log(setPromotionList);
		return data;  
	};

	useEffect(() => {
		getPromotion();
	}, []);


	return(
		<Styles.Container>
			<Styles.Nav>
				<span>Link Prueba</span>
				<span>Buscador Prueba</span>
			</Styles.Nav>
			<Styles.PromotionList>
				{promotionList.map(promo =>( 
					<Styles.PromotionItem key={promo.promotionID}>              
						{promo.description}
					</Styles.PromotionItem>))}          
			</Styles.PromotionList>
			<div style={{'height': '60px', 'width': '100vw'}} ></div>
		</Styles.Container>
	);
}

export default PromotionPage;