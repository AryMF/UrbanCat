import React from 'react';
import * as Styles from './CategoryPage.Style.jsx';

function CategoryPage(){
  return(
    <Styles.Container>
      <Styles.Nav>
        <span>Link Prueba</span>
        <span>Buscador Prueba</span>
      </Styles.Nav>
        <Styles.CategoryList>
              <Styles.CategoryItem></Styles.CategoryItem>    
              <Styles.CategoryItem></Styles.CategoryItem>
              <Styles.CategoryItem></Styles.CategoryItem>
              <Styles.CategoryItem></Styles.CategoryItem>
              <Styles.CategoryItem></Styles.CategoryItem>
              <Styles.CategoryItem></Styles.CategoryItem>
              <Styles.CategoryItem></Styles.CategoryItem>    
        </Styles.CategoryList>
    </Styles.Container>

    
  )
}
export default CategoryPage;