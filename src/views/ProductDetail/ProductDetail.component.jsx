import React from 'react';
import { useParams } from 'react-router-dom';

import * as Style from './ProductDetail.styles';
import { ShoppingCarButton } from '../../components/ShoppingCarButton';

import MockImage from '../../assets/mockImage.jpg';

const mockData = {
	productId: 1,
	description: 'FEMINIST t-shirt',
	categoryId: 1,
	colors: 'Red, Blue, Pink, Purple',
	sizes: 'S, M, L, XL',
	price: 23.50,
	createDate: '2020-06-09T11:15:06.7',
	updateDate: null,
	isActive: true
};

function ProductDetail() {
	const { description, colors, sizes, price } = mockData;
	const priceFormated = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
    
	let { id } = useParams();
    
	return(
		<Style.ProductPageConatiner>
			<Style.TopSection>
				<label> Link </label>
			</Style.TopSection>
			<Style.BottomSection>
				<Style.LeftPanel> 
					<Style.StyledImg src={MockImage} />
					<div style={{height: '60px', width: '100%', textAlign: 'center'}}> Social media bar </div>
				</Style.LeftPanel>
				<Style.RightPanel> 
					<Style.StyledLabel size={'18px'} margin={'10px'} > Product name {id} </Style.StyledLabel>
					<Style.StyledLabel size={'16px'} margin={'10px'} > {description} </Style.StyledLabel>
					<br/>
					<Style.StyledLabel size={'16px'} margin={'10px'} > Color: {colors} </Style.StyledLabel>
					<Style.StyledLabel size={'16px'} margin={'10px'} > Size: {sizes} </Style.StyledLabel>
					<Style.StyledLabel size={'16px'} margin={'10px'} > Size: {priceFormated} </Style.StyledLabel>
					<Style.StyledLabel size={'16px'} margin={'10px'} > Quantity </Style.StyledLabel>
                    <ShoppingCarButton />
				</Style.RightPanel>
			</Style.BottomSection>
			<div style={{height: '60px'}} />
		</Style.ProductPageConatiner>
	);
}

export default ProductDetail;