import * as React from 'react';

function SvgPentagonHalf(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M8 1.288l6.842 5.56L12.267 15H8V1.288zM16 6.5L8 0 0 6.5 3 16h10l3-9.5z' />
		</svg>
	);
}

export default SvgPentagonHalf;
