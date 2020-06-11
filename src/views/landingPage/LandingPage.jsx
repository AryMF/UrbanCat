import React ,{useState, useEffect} from 'react';
//import { Link } from 'react-router-dom';

import * as Styles from './LandingPage.Style';

const PromotionURL = `https://genericapiv1.azurewebsites.net/v1/shop/promotions`

const LandingPage = () => {

    const[promo,setPromo]=useState([]);
    const[category,setCategory]=useState([]);

    const getPromotions = async () =>{
        const response = await fetch(PromotionURL);
        const data = await response.json();
        //const dataRandom = (data[Math.floor(Math.random()*data.length)]);
        const promRandom = getRandomPromoElements(data,2);
        setPromo(promRandom);
        return promRandom;  
    };

    const getCategorys = async () =>{
        const response = await fetch(PromotionURL);
        const data = await response.json();
        //const dataRandom = (data[Math.floor(Math.random()*data.length)]);
        const categoRandom = getRandomCategoElements(data,3);
        setCategory(categoRandom);
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
    

    // const getCategorys = async () =>{
    //     const response = await fetch(PromotionURL);
    //     const data = await response.json();
    //     const dataRandom = (data[Math.floor(Math.random()*data.length)]);
    //     setCategory(dataRandom);
    //     return dataRandom;  
    // };


    useEffect(() =>{
            getPromotions();
            getCategorys();
    },[])

    return (

        <Styles.Grid >

            <Styles.LinkPromo>
                <h1>Hola</h1>
            </Styles.LinkPromo>
            
                
                    <Styles.PromotionLarge>
                        
                
                    </Styles.PromotionLarge>
                
                    <Styles.PromotionSmall>
                        <li>
                        {/* <img src={}></img> */}
                        </li>
                    </Styles.PromotionSmall>

                    <Styles.CategoryOne>
                        <li>
                        {/* <img src={}></img> */}
                        </li>
                    </Styles.CategoryOne>
                    <Styles.CategoryTwo>
                        <li>
                        {/* <img src={}></img> */}
                        </li>
                    </Styles.CategoryTwo>
                    <Styles.CategoryThree>
                        <li>
                        {/* <img src={}></img> */}
                        </li>
                    </Styles.CategoryThree>
        
        </Styles.Grid>

    )
}

export default LandingPage;