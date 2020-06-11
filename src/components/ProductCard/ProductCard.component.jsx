import React from 'react';

import * as Style from './ProductCard.styles';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import MockImage from '../../assets/mockImage.jpg';

const mockData = {
	productId: 20,
	description: 'Disney Princess Dinnerware Set',
	categoryId: 6,
	colors: 'Pink',
	sizes: null,
	price: 35.00,
	createDate: '2020-06-09T11:50:54.643',
	updateDate: null,
	isActive: true
};


function ProductCard() {
	const { description, price } = mockData;
	const priceFormated = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

	const imageOnClickHandler = () => {
		alert(`Product detail\n ${description}`);
	};

	return(
		<Style.ProductCardConatiner> 
			<Style.TopSection>
				<Style.StyledLabel size={'16px'} margin={'10px'} > EDIT </Style.StyledLabel>
				<Style.StyledLabel size={'16px'} margin={'10px'} > DELETE </Style.StyledLabel>
			</Style.TopSection>
			<Style.MidSectionImg src={MockImage} onClick={imageOnClickHandler} />
			<Style.BottomSection>
				<div style={{'flex': '3', textAlign: 'left'}}>
					<Style.StyledLabel size={'18px'} >{description} </Style.StyledLabel>
					<br/>
					<Style.StyledLabel size={'18px'} > {priceFormated} </Style.StyledLabel>
				</div>
				<div style={{flex: '1', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
					<Style.ShoppingCarButton>
						<Style.StyledIcon icon={faShoppingBag} size="lg"/>
					</Style.ShoppingCarButton>
				</div>
			</Style.BottomSection>
		</Style.ProductCardConatiner>
	);
}

export default ProductCard;