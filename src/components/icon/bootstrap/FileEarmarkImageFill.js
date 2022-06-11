import * as React from 'react';

function SvgFileEarmarkImageFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M4 0h5.293A1 1 0 0110 .293L13.707 4a1 1 0 01.293.707v5.586l-2.73-2.73a1 1 0 00-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 00-1.222.15L2 12.292V2a2 2 0 012-2zm5.5 1.5v2a1 1 0 001 1h2l-3-3zm-1.498 4a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z' />
			<path d='M10.564 8.27L14 11.708V14a2 2 0 01-2 2H4a2 2 0 01-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z' />
		</svg>
	);
}

export default SvgFileEarmarkImageFill;