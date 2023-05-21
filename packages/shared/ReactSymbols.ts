/*
 * @Author: sfy
 * @Date: 2023-05-21 23:28:54
 * @LastEditors: sfy
 * @LastEditTime: 2023-05-21 23:32:17
 * @FilePath: /big-react/packages/shared/ReactSymbols.ts
 * @Description: update here
 */

const supportSymbol = typeof Symbol === 'function' && Symbol.for;

export const REACT_ELEMENT_TYPE = supportSymbol
	? Symbol.for('react.elment')
	: 0xea7c;
