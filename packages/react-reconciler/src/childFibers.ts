/*
 * @Author: sfy
 * @Date: 2023-05-28 17:47:49
 * @LastEditors: sfy
 * @LastEditTime: 2023-06-03 16:10:42
 * @FilePath: /big-react/packages/react-reconciler/src/childFibers.ts
 * @Description: update here
 */

import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import { FiberNode, createFiberFromElement } from './fiber';
import { ReactElementType } from 'shared/ReactTypes';
import { Placement } from './fiberFlags';
import { HostText } from './workTags';

function ChildReconciler(shouldTrackEffect: boolean) {
	return function reconcileChildFibers(
		returnFiber: FiberNode,
		currentFiber: FiberNode | null,
		newChild?: ReactElementType
	) {
		function reconcileSingleElement(
			returnFiber: FiberNode,
			currentFiber: FiberNode | null,
			element: ReactElementType
		) {
			// 根据element创建fiber
			const fiber = createFiberFromElement(element);
			fiber.return = returnFiber;
			return fiber;
		}

		function reconcileSingleTextNode(
			returnFiber: FiberNode,
			currentFiber: FiberNode | null,
			content: string | number
		) {
			const fiber = new FiberNode(
				HostText,
				{
					content
				},
				null
			);
			fiber.return = returnFiber;
			return fiber;
		}

		function placeSingleChild(fiber: FiberNode) {
			if (shouldTrackEffect && fiber.alternate === null) {
				fiber.flags |= Placement;
			}
			return fiber;
		}
		// 判断当前fiber的类型
		if (typeof newChild === 'object' && newChild !== null) {
			switch (newChild.$$typeof) {
				case REACT_ELEMENT_TYPE:
					return placeSingleChild(
						reconcileSingleElement(returnFiber, currentFiber, newChild)
					);

				default:
					if (__DEV__) {
						console.warn('未实现的reconcile类型', newChild);
					}
					break;
			}
		}

		// HostText
		if (typeof newChild === 'string' || typeof newChild === 'number') {
			return placeSingleChild(
				reconcileSingleTextNode(returnFiber, currentFiber, newChild)
			);
		}
		if (__DEV__) {
			console.warn('未实现的reconcile类型', newChild);
		}
		return null;
	};
}

export const reconcileChildFibers = ChildReconciler(true);

export const mountChildFibers = ChildReconciler(false);
