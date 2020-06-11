import React from 'react';

import * as Style from './ProductCard.styles';

function ProductCard({ mockData }) {
	return(
		<Style.ProductCardConatiner> 
			<label> Hola {mockData} </label>
		</Style.ProductCardConatiner>
	);
}

export default ProductCard;