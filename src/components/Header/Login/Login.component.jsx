import React, { useState, useContext } from 'react';
// import { AuthContext, closeSession } from '../../controller/Auth';

import {
	ImageStyle,
	LogoutButton,
	Dropdown,
	TransparentDiv,
	DropdownContent,
	StyledLabel,
	StyledInput,
	UserMenuButtonContainer
} from './Login.styles';
import { StyledIcon } from '../Header.styles';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
// import ButtonImage from '../ButtonImage/ButtonImage';
// import avatarSVG from '../../assets/images/avatar.png';

function UserMenu({loginHandle}) {
	// const { currentUser } = useContext(AuthContext);
	// const avatarImage = currentUser.photoURL || avatarSVG;
	const [display, setDisplay] = useState(false);

	const onMouseEnterHandler = (e) => {
		e.preventDefault();
		setDisplay(true);
	};

	const onMouseLeaveHandler = (e) => {
		e.preventDefault();
		setDisplay(false);
		console.log('1');
	};

	return (
		<UserMenuButtonContainer
			onMouseEnter={onMouseEnterHandler}
			onMouseLeave={onMouseLeaveHandler}
		>
			<StyledIcon
				style={{'fontSize': '42px', 'margin': '15px'}}
				icon={faUserCircle}
				size="lg"
			/>
			<Dropdown display={display ? 'flex' : 'none'}>
				<TransparentDiv />
				<DropdownContent onSubmit={loginHandle}>
					<br />
					<StyledLabel> USERNAME: </StyledLabel>
					<StyledInput type="text" name="name" />
					<br />
					<StyledLabel> PASSWORD: </StyledLabel>
					<StyledInput type="password" name="password" />
					<LogoutButton type="submit" value="Submit" > log out </LogoutButton>
				</DropdownContent>
			</Dropdown>
		</UserMenuButtonContainer>
	);
}

export default UserMenu;