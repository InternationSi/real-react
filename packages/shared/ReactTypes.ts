/*
 * @Author: sfy
 * @Date: 2023-05-21 23:33:36
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-24 22:49:07
 * @FilePath: /big-react/packages/shared/ReactTypes.ts
 * @Description: update here
 */

export type Type = any;
export type Key = any;
export type Ref = any;
export type Props = any;
export type ElementType = any;

export interface ReactElementType {
	$$typeof: symbol | number;
	type: ElementType;
	key: Key;
	props: Props;
	ref: Ref;
	__mark: string;
}

export type Action<State> = State | ((prevState: State) => State);
