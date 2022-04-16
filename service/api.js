import axios from './request';
/**
 * 获取用户信息接口
 */
export function getUserInfoApi() {
	return axios.get('/user/getUserInfo', {
	}).then(res => res.data);
}

