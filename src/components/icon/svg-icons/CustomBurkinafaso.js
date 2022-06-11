import * as React from 'react';

const SvgCustomBurkinaFaso = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 900 600'
		style={{
			enableBackground: 'new 0 0 512 512',
		}}
		xmlSpace='preserve'
		width='1em'
		height='1em'
		className='svg-icon'
		{...props}> 
 	<rect width="900" height="600" fill="#009e49"/>
	<rect width="900" height="300" fill="#ef2b2d"/>
	<g transform="translate(450,300)" fill="#fcd116">
		<g id="c">
			<path id="t" d="M 0,-100 V 0 H 50" transform="rotate(18 0,-100)"/>
			<use xlinkHref="#t" transform="scale(-1,1)"/>
		</g>
		<use xlinkHref="#c" transform="rotate(72)"/>
		<use xlinkHref="#c" transform="rotate(144)"/>
		<use xlinkHref="#c" transform="rotate(216)"/>
		<use xlinkHref="#c" transform="rotate(288)"/>
	</g>
</svg>
);
export default SvgCustomBurkinaFaso;
