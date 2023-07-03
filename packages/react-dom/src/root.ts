/*
 * @Author: sfy
 * @Date: 2023-05-30 22:59:59
 * @LastEditors: sfy
 * @LastEditTime: 2023-06-11 23:29:15
 * @FilePath: /big-react/packages/react-dom/src/root.ts
 * @Description: update here
 */
import { Container } from 'hostConfig';
import {
	createContainer,
	updateContainer
} from 'react-reconciler/src/fiberReconciler';
import { ReactElementType } from 'shared/ReactTypes';
import { initEvent } from './SyntheticEvent';

export function createRoot(container: Container) {
	const root = createContainer(container);
	return {
		render(element: ReactElementType) {
			initEvent(container, 'click');
			return updateContainer(element, root);
		}
	};
}
