import React ,{useState, useEffect} from 'react';
//import { Link } from 'react-router-dom';

import * as Styles from './LandingPage.Style';



const LandingPage = () => {

    // const[promo,setPromo]=useState([]);
    // const[category,setCategory]=useState([]);

    // useEffect(() =>{
            // const promotions = async ()=>{
            //     const dataPromo = await ..........
            //     random 2
            //     setPromo(dataPromo)
            // }
           //promotions();

                // const categorys = async ()=>{
            //     const dataCategory = await .....
        
            //     setCategory(dataCategory)
            // }
           //promotions();

    // })

    return (

        <Styles.Grid >

            <Styles.LinkPromo>
                <h1>Hola</h1>
            </Styles.LinkPromo>
            
                
                    <Styles.PromotionLarge>
                        <li>
                        {/* <img src={}></img> */}
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