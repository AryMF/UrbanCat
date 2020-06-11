import React, { useState } from 'react';
import * as Styles from './Banner.style.jsx';


function BannerComponent (){
    const [promoPrueba, setPromoprueba] = useState ([
        {
            promo: 'woman',
            imags: 'Imagen promo',
            descrip: 'description'
        },

    ]);

   
    return (
        <Styles.Banner>

            <Styles.Network>
            Redes
            </Styles.Network>
            
            <Styles.Picture>
            {promoPrueba.map(promosss =>(
                <li>{promosss.imags}</li>
            )
                )}
            </Styles.Picture>

            <Styles.Description>
            {promoPrueba.map(promosss =>(
                <li>{promosss.descrip}</li>
            )
                )}
            </Styles.Description>


                <Styles.Edit>
                    Edit
                </Styles.Edit>
                <Styles.Delete>
                    Delete
                </Styles.Delete>


        </Styles.Banner>

    )
}


export default BannerComponent;
