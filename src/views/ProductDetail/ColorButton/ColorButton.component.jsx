import React  from 'react';

import * as Style from './ColorButton.style';

function ColorButton({ colors, selectedColor, setSelectedColor }) {
	let colorArry = [];
	colorArry = colors.split(', ');

	const ColorButtonSelection = (element) => {
		setSelectedColor(element);
	};

	const buttonsArray = colorArry.map((element) => {
		return <Style.ColorImage 
			key={element}
			color={element}
			isActive={selectedColor == element}
			onClick={() => ColorButtonSelection(element)}
		/>;
	});
    
	return(
		<div>
			Color: {buttonsArray}
		</div>
	);
}

export default ColorButton;