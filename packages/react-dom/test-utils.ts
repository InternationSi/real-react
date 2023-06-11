/*
 * @Author: sfy
 * @Date: 2023-06-11 23:19:56
 * @LastEditors: sfy
 * @LastEditTime: 2023-06-11 23:19:57
 * @FilePath: /big-react/packages/react-dom/test-utils.ts
 * @Description: update here
 */
import { ReactElementType } from 'shared/ReactTypes';
// @ts-ignore
import { createRoot } from 'react-dom';

export function renderIntoDocument(element: ReactElementType) {
	const div = document.createElement('div');
	// element
	return createRoot(div).render(element);
}
