/*
 * @Author: sfy
 * @Date: 2023-06-03 18:26:03
 * @LastEditors: sfy
 * @LastEditTime: 2023-06-03 18:30:47
 * @FilePath: /big-react/demo/test-fc/main.tsx
 * @Description: update here
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
	return (
		<div>
			<Child />
		</div>
	);
}

function Child() {
	return <span>big-react</span>;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
);
