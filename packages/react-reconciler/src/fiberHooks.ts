/*
 * @Author: sfy
 * @Date: 2023-06-03 18:20:05
 * @LastEditors: sfy
 * @LastEditTime: 2023-06-03 18:21:37
 * @FilePath: /big-react/packages/react-reconciler/src/fiberHooks.ts
 * @Description: update here
 */

import { FiberNode } from './fiber';
export function renderWithHooks(wip: FiberNode) {
	const Component = wip.type;
	const props = wip.pendingProps;
	const children = Component(props);
	return children;
}
