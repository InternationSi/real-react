/*
 * @Author: sfy
 * @Date: 2023-05-23 21:34:36
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-23 21:57:16
 * @FilePath: /big-react/packages/react-reconciler/src/fiber.ts
 * @Description: update here
 */
import { Key, Props, Ref } from 'shared/ReactTypes';
import { WorkTag } from './workTags';
import { Flags, NoFlags } from './fiberFlags';
export class FiberNode {
	tag: WorkTag; // fiberNode 的标记 什么类型
	type: any;
	key: Key;
	stateNode: any;
	ref: Ref;

	return: FiberNode | null; // 返回到父节点
	sibling: FiberNode | null; // 相邻节点
	child: FiberNode | null; // 儿子节点
	index: number; // 索引值

	pendingProps: Props | null;
	memoizedProps: Props | null;
	alternate: FiberNode | null;
	flags: Flags;

	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		// 实例
		this.tag = tag;
		this.key = key;

		// HostComponent <div> div DOM
		this.stateNode = null;
		// FunctionComponent () => {}
		this.type = null;

		// 构成树状结构
		this.return = null;
		this.sibling = null;
		this.child = null;
		this.index = 0;

		this.ref = null;

		// 作为工作单元
		this.pendingProps = pendingProps;
		this.memoizedProps = null;

		this.alternate = null;
		this.flags = NoFlags;
	}
}
