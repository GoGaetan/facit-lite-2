import { React, useContext } from 'react';
import Button from '../../../components/bootstrap/Button';

// eslint-disable-next-line react/prop-types
const Child = ({ ctx }) => {
	const ctxValue = useContext(ctx);
	const { counter, name, increment } = ctxValue;

	// eslint-disable-next-line no-console
	console.log('child of', name);

	return (
		<form className='row g-4'>
			<div className='box'>
				<p>Child of {counter}</p>
				<Button color='warning' className='w-100 py-3' onClick={increment}>
					Increment
				</Button>
			</div>
		</form>
	);
};

export default Child;
