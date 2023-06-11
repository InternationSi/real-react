/*
 * @Author: sfy
 * @Date: 2023-06-11 23:14:07
 * @LastEditors: sfy
 * @LastEditTime: 2023-06-11 23:25:43
 * @FilePath: /big-react/scripts/jest/jest.config.js
 * @Description: update here
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('jest-config');

module.exports = {
	...defaults,
	rootDir: process.cwd(),
	moduleDirectories: [
		// 对于 React ReactDOM
		'dist/node_modules',
		// 对于第三方依赖
		...defaults.moduleDirectories
	],
	testEnvironment: 'jsdom'
};
