import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { getProductByIdData } from '../../controller/fetchInfo';

import * as Style from './ProductDetail.styles';

import { ShoppingCarButton } from '../../components/ShoppingCarButton';
import { SizeButton } from './SizeButton';
import { ColorButton } from './ColorButton';

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
	const { id } = useParams();
	const history = useHistory();
	const { description, colors, sizes, price } = mockData;
	const priceFormated = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
	const [productInfo, setProductInfo] = useState('');
	const [selectedSize, setSelectedSize] = useState('');
	const [selectedColor, setSelectedColor] = useState('');
	const [selectedQuantity, setSelectedQuantity] = useState(0);

	const backToProducts = () => {
		history.goBack();
	};

	const getProductData = async () => {
		const data = await getProductByIdData(id);
		setProductInfo(data);
	};

	useEffect(() => {
		getProductData();
	}, []);

	const shoppingButtonHandler = () => {
		const productData = {
			productId: 1,
			description: 'FEMINIST t-shirt',
			categoryId: 1,
			colors: selectedColor,
			sizes: selectedSize,
			price: 23.50,
			createDate: '2020-06-09T11:15:06.7',
			updateDate: null,
			isActive: true,
			quantity: selectedQuantity,
		};

		console.log(productData);
	};

	return(
		<Style.ProductPageConatiner>
			<Style.TopSection>
				<Style.StyledLabel
					size={'16px'}
					margin={'10px'}
					style={{cursor: 'pointer'}}
					onClick={backToProducts}
				>
					{'<< BACK TO PRODUCT LIST'}
				</Style.StyledLabel>
			</Style.TopSection>
			<Style.BottomSection>
				<Style.LeftPanel>
					<Style.StyledImg src={MockImage} />
					<div style={{height: '60px', width: '100%', textAlign: 'center'}}> Social media bar </div>
				</Style.LeftPanel>
				<Style.RightPanel>
					<Style.StyledLabel size={'20px'} margin={'10px'} > Product name {id} </Style.StyledLabel>
					<Style.StyledLabel size={'16px'} margin={'10px'} > {productInfo.description} </Style.StyledLabel>
					<Style.StyledLabel size={'16px'} margin={'10px'} > Price: {productInfo.priceFormated} </Style.StyledLabel>
					<br/>
					<div style={{display: 'Flex', flexDirection: 'column'}} >
						<Style.StyledLabel size={'16px'} margin={'10px'} >
							{ productInfo.colors
								? <ColorButton
									colors={productInfo.colors}
									selectedColor={selectedColor}
									setSelectedColor={setSelectedColor}
								/>
								: null
							}
							<br/>
							{ productInfo.sizes
								? <SizeButton
									sizes={productInfo.sizes}
									selectedSize={selectedSize}
									setSelectedSize={setSelectedSize}
								/>
								: null
							}
							<br/>
						</Style.StyledLabel>
						<Style.StyledLabel size={'16px'} margin={'10px'} > Quantity </Style.StyledLabel>
					</div>
					<br/>
					<ShoppingCarButton />
				</Style.RightPanel>
			</Style.BottomSection>
			<div style={{height: '60px'}} />
		</Style.ProductPageConatiner>
	);
}

export default ProductDetail;