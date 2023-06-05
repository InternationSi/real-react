/*
 * @Author: sfy
 * @Date: 2023-06-03 18:26:03
 * @LastEditors: sfy
 * @LastEditTime: 2023-06-05 22:51:04
 * @FilePath: /big-react/demos/test-fc/main.tsx
 * @Description: update here
 */
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
	const [num, setNum] = useState(100);
	(window as any).setNum = setNum;
	return <div>{num}</div>;
}

function Child() {
	return <span>big-react</span>;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
);
