import React  from 'react';

import * as Style from './SizeButton.styles';
import sizeS from '../../../assets/small.svg';
import sizeM from '../../../assets/medium.svg';
import sizeL from '../../../assets/large.svg';
import sizeXL from '../../../assets/extra.svg';

function SizeButton({ sizes, selectedSize, setSelectedSize }) {
	const sizeRef = {
		S: sizeS,
		M: sizeM,
		L: sizeL,
		XL: sizeXL,
	};
	let sizeArry = [];
	sizeArry = sizes.split(', ');

	const SizeButtonSelection = (element) => {
		setSelectedSize(element);
	};

	const buttonsArray = sizeArry.map((element) => {
		return <Style.SizeImage 
			key={element}
			src={sizeRef[element]}
			isActive={selectedSize == element}
			onClick={() => SizeButtonSelection(element)}
		/>;
	});
    
	return(
		<div>
			Size: {buttonsArray}
		</div>
	);
}

export default SizeButton;