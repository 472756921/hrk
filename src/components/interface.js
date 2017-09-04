/**
 * Created by Benson on 2017/9/1.
 */


const host = 'http://9jck.com:8099/';

//用户注册
export const userReg = function () {
  const URL = 'registerCustomer';
  const API = host + URL;
  return API;
};
//用户注册
export const getUserinfo = function () {
  const URL = 'getCustomerInformation';
  const API = host + URL;
  return API;
};
//用户信息修改
export const updateCustomerMessage = function () {
  const URL = 'updateCustomerMessage';
  const API = host + URL;
  return API;
};
//获取城市列表
export const getCity = function () {
  const URL = 'getCitys';
  const API = host + URL;
  return API;
};
//获取城市列表
export const getDocList = function () {
  const URL = 'getDoctors';
  const API = host + URL;
  return API;
};
