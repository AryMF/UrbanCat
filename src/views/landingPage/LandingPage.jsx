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
        const dataRandom = (data[Math.floor(Math.random()*data.length)]);
        setPromo(dataRandom);
        console.log(dataRandom)
        return dataRandom;  
    };

    // const getCategorys = async () =>{
    //     const response = await fetch(PromotionURL);
    //     const data = await response.json();
    //     const dataRandom = (data[Math.floor(Math.random()*data.length)]);
    //     setCategory(dataRandom);
    //     return dataRandom;  
    // };


    useEffect(() =>{
            getPromotions();
    },[])

    return (

        <Styles.Grid >

            <Styles.LinkPromo>
                <h1>Hola</h1>
            </Styles.LinkPromo>
            
                
                    <Styles.PromotionLarge>
                        <li>
                        
                        </li>
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