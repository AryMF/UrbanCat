import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import * as Styles from './CategoryPage.styles.jsx';
import { getCategoriesData } from '../../controller/fetchInfo';


function CategoryPage(){
	const [categoryList, setCategoryList] = useState([]);
	const history = useHistory();

	const getcategory = async () => {
		const data = await getCategoriesData();
		setCategoryList(data);
	};

	useEffect(() => {
		getcategory();
	}, []);

	const categoryClickHandler = (category) => {
		history.push('/products/' + category);
	};

	return(

		<Styles.Container>
			<Styles.Nav>
				{/* <div>Link Prueba</div>
				<div>Buscador Prueba</div> */}
			</Styles.Nav>
			<Styles.CategoryList>
				{
					categoryList.map(promo => (
						<Styles.CategoryItem
							key={promo.categoryId}
							onClick={() => categoryClickHandler(promo.categoryId)}
						>
							{promo.description}
						</Styles.CategoryItem>
					))
				}
			</Styles.CategoryList>
			<div style={{'height': '60px', 'width': '100vw'}} ></div>
		</Styles.Container>
	);
}

export default CategoryPage;