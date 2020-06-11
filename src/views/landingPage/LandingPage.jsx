import { React , useState } from 'react';

import styled from 'styled-components';


const LandingPage = () => {

    const [promo,setPromo ] =useState([]);
    const [category,setCategory ] =useState([]);

const Grid= styled.div`
    display: grid;
    grid-template-areas: 
    "main";
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 5rem 1fr 5rem;
    height: 100%;
`

    return(

        <Grid className="grid-container">
            <section className="promotions">
                    <ul>
                        <li>

                        </li>
                    </ul>
                        <li>

                        </li>
            </section>
            <section className="category">
                    <ul>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                    </ul>
            </section>
        
        </Grid>

    )
}

export default LandingPage;