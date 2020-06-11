import React from 'react';

import * as Style from './Header.styles';

// import HorizontalLogo from '../../assets/logo_horizontal.svg';
// import SymbolLogo from '../../assets/logo_Cat.svg';

function Header() {
	return(
		<Style.HeaderContainer>
			<Style.HorizontalLogo />
			<Style.SymbolLogo />
			<Style.StyledDiv>
				
			</Style.StyledDiv>
		</Style.HeaderContainer>
	);
}

export default Header;