import React ,{useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import { getCategoriesData, getPromotionsData } from '../../controller/fetchInfo';

import * as Styles from './LandingPage.Style';

const PromotionURL = 'https://genericapiv1.azurewebsites.net/v1/shop/promotions';

const CategoriesURL = 'https://genericapiv1.azurewebsites.net/v1/shop/categories';

const LandingPageView = () => {
	const history = useHistory();
	const[promo, setPromo]=useState([]);
	const [categoryList, setCategoryList] = useState([]);
	const [promotionList, setPromotionList] = useState([]);

	const getcategory = async () => {
		const data = await getCategoriesData();
		setCategoryList(data);
	};

	const getPromotion = async () => {
		const data = await getPromotionsData();
		setPromotionList(data);
	};

	useEffect(() => {
		getcategory();
		getPromotion();
	}, []);

	const linkClickHandler = (direction) => {
		history.push(direction);
	};

	const getPromotions = async () =>{
		const response = await fetch(PromotionURL);
		const data = await response.json();
		const promRandom = getRandomPromoElements(data,2);
		setPromo(promRandom);
		return promRandom;
	};

	function getRandomPromoElements(data,count ) {
		var shuffled = data.slice(0), i = data.length, min = i - count, temp, index;
		while (i-- > min) {
			index = Math.floor((i + 1) * Math.random());
			temp = shuffled[index];
			shuffled[index] = shuffled[i];
			shuffled[i] = temp;
		}
		return shuffled.slice(min);
	}

	function getRandomCategoElements(data,count ) {
		var shuffled = data.slice(0), i = data.length, min = i - count, temp, index;
		while (i-- > min) {
			index = Math.floor((i + 1) * Math.random());
			temp = shuffled[index];
			shuffled[index] = shuffled[i];
			shuffled[i] = temp;
		}
		return shuffled.slice(min);
	}

	return (
		<Styles.Container >
			<Styles.TopSection>
				<Styles.StyledLabel
					size={'18px'}
					onClick={() => linkClickHandler('/promotions')}
				>
					PROMOTIONS
				</Styles.StyledLabel>
			</Styles.TopSection>
			<Styles.BottomSection>
				<Styles.Promotion>
					<Styles.Img src="https://source.unsplash.com/random/1600x900/?backpack"></Styles.Img>
				</Styles.Promotion>
				<Styles.Promotion>
					<Styles.Img2 src="https://source.unsplash.com/random/1600x900/?shirts"></Styles.Img2>
				</Styles.Promotion>
				<br/><br/>
				<Styles.StyledLabel
					size={'18px'}
					onClick={() => linkClickHandler('/categories')}
				>
					PRODUCTS
				</Styles.StyledLabel>
				<Styles.Categories>
					<Styles.Category src="https://source.unsplash.com/random/200x150/?sneakers" />
					<Styles.Category src="https://source.unsplash.com/random/200x150/?shoes" />
					<Styles.Category src="https://source.unsplash.com/random/200x150/?clocks" />
				</Styles.Categories>
			</Styles.BottomSection>
		</Styles.Container>
	);
};

export default LandingPageView;