import React from 'react';

import * as Style from './ProductsPage.styles';

import { ProductCard } from '../../components/ProductCard';

function ProductsPage() {
	let algo = [];
	for(let i=0; i < 10; i++){
		algo.push(
			<ProductCard mockData={i}/>
		);
	}

	return(
		<Style.ProductPageConatiner>
			<Style.TopSection>
				<label> Link </label>
			</Style.TopSection>
			<Style.BottomSection>
				{algo}
			</Style.BottomSection>
		</Style.ProductPageConatiner>
	);
}

export default ProductsPage;