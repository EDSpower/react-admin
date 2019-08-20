import fetch from './fetch';
// 登录接口
export function loginApi(options) {
  return fetch.put('/v1/session/login' , options);
}

// 获取取证员操作历史列表
export async function getLandHistory( options ) {
  let searchValue = ''
  if ( options.searchVal ) {
    searchValue = `&cert_number=${ options.searchVal }`
  }
  const res = await fetch.get(`/v1/logging?page=${ options.page }&limit=${ options.limit }${ searchValue }`);
  return res;
}