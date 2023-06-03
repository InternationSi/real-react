/*
 * @Author: sfy
 * @Date: 2023-06-03 15:30:38
 * @LastEditors: sfy
 * @LastEditTime: 2023-06-03 15:31:46
 * @FilePath: /big-react/scripts/rollup/dev.config.js
 * @Description: update here
 */
import reactDomConfig from './react-dom.config';
import reactConfig from './react.config';

export default () => {
	return [...reactConfig, ...reactDomConfig];
};
