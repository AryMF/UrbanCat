import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import * as Style from './Header.styles';
import { UserMenu } from './Login';
import { faShoppingBag, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

// import HorizontalLogo from '../../assets/logo_horizontal.svg';
// import SymbolLogo from '../../assets/logo_Cat.svg';

function Header({darkTheme, themeChangerHanddler}) {
	const [currentUser, setCurrentUser] = useState(false);
	const history = useHistory();

	const backToHome = (category) => {
		history.push('/');
	};

	const loginHandle = (ev) => {
		ev.preventDefault();
		//TODO:Funcionalidad form
	};

	return(
		<Style.HeaderContainer>
			<Style.HorizontalLogo onClick={backToHome} />
			<Style.SymbolLogo onClick={backToHome} />
			<Style.StyledDiv>
				{ darkTheme
					? <Style.StyledIcon
						icon={faMoon}
						style={{'fontSize': '28px', 'margin': '15px'}}
						onClick={themeChangerHanddler}
					/>
					: <Style.StyledIcon
						icon={faSun}
						style={{'fontSize': '28px', 'margin': '15px'}}
						onClick={themeChangerHanddler}
					/>
				}
				{ currentUser
					? <Style.StyledLabel> Welcome<br/>[ Administrator ]</Style.StyledLabel>
					: <UserMenu loginHandle={loginHandle} />
				}
				<Style.ShoppingCarPlaceholder>
					<Style.StyledIcon icon={faShoppingBag} size="lg"/>
				</Style.ShoppingCarPlaceholder>
			</Style.StyledDiv>
		</Style.HeaderContainer>
	);
}

export default Header;