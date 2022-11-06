import React from 'react';
import Today from './Today';
import Yesterday from './Ysday';
const Compare = () => {
	return (
		<div className="accordion accordion-flush" id="comparePageAccordion">
			<Today />
			<Yesterday />
		</div>
	)
};

export default Compare;
