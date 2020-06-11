import React, { useState } from 'react';

import * as Style from './Header.styles';
import { UserMenu } from './Login';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

// import HorizontalLogo from '../../assets/logo_horizontal.svg';
// import SymbolLogo from '../../assets/logo_Cat.svg';

function Header() {
	const [currentUser, setCurrentUser] = useState(true); //Temporal
	
	return(
		<Style.HeaderContainer>
			<Style.HorizontalLogo />
			<Style.SymbolLogo />
			<Style.StyledDiv>
				{ currentUser 
					? <Style.StyledLabel> Welcome<br/>[ Administrator ]</Style.StyledLabel> 
					: <UserMenu /> 
				}
				<Style.ShoppingCarPlaceholder>
					<Style.StyledIcon icon={faShoppingBag} size="lg"/>
				</Style.ShoppingCarPlaceholder>
			</Style.StyledDiv>
		</Style.HeaderContainer>
	);
}

export default Header;