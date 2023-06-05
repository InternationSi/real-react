/*
 * @Author: sfy
 * @Date: 2023-06-05 22:17:15
 * @LastEditors: sfy
 * @LastEditTime: 2023-06-05 22:54:36
 * @FilePath: /big-react/packages/react/src/currentDispatcher.ts
 * @Description: update here
 */

import { Action } from 'shared/ReactTypes';

export interface Dispatcher {
	useState: <T>(initialState: (() => T) | T) => [T, Dispatch<T>];
}

export type Dispatch<State> = (action: Action<State>) => void;

const currentDispatcher: { current: Dispatcher | null } = {
	current: null
};

export const resolveDispatcher = (): Dispatcher => {
	const dispatcher = currentDispatcher.current;
	if (dispatcher == null) {
		throw new Error('hook只能在函数组件中执行');
	}
	return dispatcher;
};

export default currentDispatcher;
