import { React, createContext, useMemo, useState } from 'react';

export const CustomCtx = createContext(null);

// eslint-disable-next-line react/prop-types
const ProviderWithMemo = ({ children }) => {
	const [counter, setCounter] = useState(0);

	const value = useMemo(
		() => ({
			name: 'ProviderWithMemo',
			counter,
			increment: () => setCounter((c) => c + 1),
		}),
		[counter],
	);

	return <CustomCtx.Provider value={value}>{children}</CustomCtx.Provider>;
};

export default ProviderWithMemo;
