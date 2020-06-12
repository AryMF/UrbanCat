import React from 'react';
import * as Styles from './CategoryPage.styles.jsx';


function CategoryPage(){
	
	return(

		<Styles.Container>
			<Styles.Nav>
				<div>Link Prueba</div>
				<div>Buscador Prueba</div>
			</Styles.Nav>
			<Styles.CategoryList>
					<Styles.CategoryItem> </Styles.CategoryItem>
          <Styles.CategoryItem> </Styles.CategoryItem>
          <Styles.CategoryItem> </Styles.CategoryItem>
          <Styles.CategoryItem> </Styles.CategoryItem>
          <Styles.CategoryItem> </Styles.CategoryItem>
          <Styles.CategoryItem> </Styles.CategoryItem>
          <Styles.CategoryItem> </Styles.CategoryItem>
          <Styles.CategoryItem> </Styles.CategoryItem>
          <Styles.CategoryItem> </Styles.CategoryItem>
          <Styles.CategoryItem> </Styles.CategoryItem>          
			</Styles.CategoryList>
			<div style={{'height': '60px', 'width': '100vw'}} ></div>
		</Styles.Container>
	);
}

export default CategoryPage;