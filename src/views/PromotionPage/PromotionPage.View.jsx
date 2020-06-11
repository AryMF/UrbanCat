import React, { useState, useEffect } from 'react';
import * as Styles from './PromotionPage.Style.jsx';

const PromotionURL = `https://genericapiv1.azurewebsites.net/v1/shop/promotions`

function PromotionPage(){
  const [promotionList, setPromotionList] = useState([])

  const getPromotion = async () => {
    const response = await fetch(PromotionURL);
    const data = await response.json();
    console.log(data);
    setPromotionList(data)
    console.log(setPromotionList)
    return data;  
  };

  useEffect(() => {
    getPromotion();
  }, [promotionList]);


  return(
      <Styles.PromotionList>
          {promotionList.map(promo =>( 
            <Styles.PromotionItem>
              {promo.description}
            </Styles.PromotionItem>))}          
        </Styles.PromotionList>
  )
}

export default PromotionPage;