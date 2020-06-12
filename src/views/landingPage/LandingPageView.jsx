import React ,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import * as Styles from './LandingPage.Style';

const PromotionURL = 'https://genericapiv1.azurewebsites.net/v1/shop/promotions';

const CategoriesURL = 'https://genericapiv1.azurewebsites.net/v1/shop/categories';

const LandingPageView = () => {

	const[promo, setPromo]=useState([]);
	const[category, setCategory]=useState([]);

	const getPromotions = async () =>{
		const response = await fetch(PromotionURL);
		const data = await response.json();
		const promRandom = getRandomPromoElements(data,2);
		setPromo(promRandom);
		return promRandom;
	};

	const getCategorys = async () =>{
		const response = await fetch(CategoriesURL);
		const data = await response.json();
		const categoRandom = getRandomCategoElements(data,3);
		setCategory(categoRandom);
		console.log(categoRandom);
		return categoRandom;
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

	useEffect(() =>{
		getPromotions();
		getCategorys();
	},[]);

	return (
		<Styles.Grid >
			<Styles.LinkPromo>
				<Link to="/promotions" >Promotions</Link>
			</Styles.LinkPromo>
			<Styles.PromotionLarge>
				<Styles.Img src="https://source.unsplash.com/random/1600x900/?bags"></Styles.Img>
			</Styles.PromotionLarge>
			<Styles.PromotionSmall>
				<Styles.Img src="https://source.unsplash.com/random/1600x900/?shirts"></Styles.Img>
			</Styles.PromotionSmall>
			<Styles.LinkProdu>
				<Link to="/categories" style={{'marginRight': '2em'}} >Products</Link>
			</Styles.LinkProdu>
			<Styles.Categories>
				<Styles.Category>
					<h1>Category</h1>
					<Styles.Img src="https://source.unsplash.com/random/200x150/?sneakers"></Styles.Img>
				</Styles.Category>
				<Styles.Category>
					<h1>Category</h1>
					<Styles.Img src="https://source.unsplash.com/random/200x150/?shoes"></Styles.Img>
				</Styles.Category>
				<Styles.Category>
					<h1>Category</h1>
					<Styles.Img src="https://source.unsplash.com/random/200x150/?clocks"></Styles.Img>
				</Styles.Category>
			</Styles.Categories>
		</Styles.Grid>
	);
};

export default LandingPageView;