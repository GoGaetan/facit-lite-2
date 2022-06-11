import React from 'react';
import { useMeasure } from 'react-use';
import Popovers from '../../components/bootstrap/Popovers';

const Footer = () => {
	const [ref, { height }] = useMeasure();

	const root = document.documentElement;
	root.style.setProperty('--footer-height', `${height}px`);

	return (
		<footer ref={ref} className='footer'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col'>
						<Popovers title='Footer.js' desc={<code>src/layout/Footer/Footer.js</code>}>
							Footer
						</Popovers>
						<code className='ps-3'>Footer.js</code>
					</div>
					<div className='col-auto'>
						<Popovers title='Footer.js' desc={<code>src/layout/Footer/Footer.js</code>}>
							Footer
						</Popovers>
						<code className='ps-3'>Footer.js</code>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
