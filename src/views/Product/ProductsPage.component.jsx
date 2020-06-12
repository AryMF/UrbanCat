import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getProductsData } from '../../controller/fetchInfo';
import * as Style from './ProductsPage.styles';

import { ProductCard } from '../../components/ProductCard';

function ProductsPage() {
	const { id } = useParams();
	const [productList, setProductList] = useState([]);

	const getProductData = async () => {
		const data = await getProductsData();
		const filteredData = data.filter(product => product.categoryId == id);
		setProductList(filteredData);
	};

	useEffect(() => {
		getProductData();
	}, []);

	return(
		<Style.ProductPageConatiner>
			<Style.TopSection>
				<label> Link </label>
			</Style.TopSection>
			<Style.BottomSection>
				{
					productList.map(promo => (
						<ProductCard
							key={promo.productId}
							data={promo}
						/>
					))
				}
				<div style={{'height': '60px', 'width': '100vw'}} ></div>
			</Style.BottomSection>
		</Style.ProductPageConatiner>
	);
}

export default ProductsPage;