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
//获取城市医院列表
export const getHospitals = function () {
  const URL = 'getHospitals';
  const API = host + URL;
  return API;
};
//获取城市医院科室列表
export const getDepartmentDetails = function () {
  const URL = 'getDepartmentDetails';
  const API = host + URL;
  return API;
};
//确认预约
export const saveSeeADoctor = function () {
  const URL = 'saveSeeADoctor';
  const API = host + URL;
  return API;
};
export const getDocList = function () {
  const URL = 'getDoctors';
  const API = host + URL;
  return API;
};
//用户医生互动列表
export const getConsultingListByCustomer = function () {
  const URL = 'getConsultingListByCustomer';
  const API = host + URL;
  return API;
};
//发送聊天信息
export const saveConsultingDetail = function () {
  const URL = 'saveConsultingDetail';
  const API = host + URL;
  return API;
};
//获取用户所有关联联系人
export const selectGuardianDetail = function () {
  const URL = 'selectGuardianDetail';
  const API = host + URL;
  return API;
};
//新增关联联系人
export const saveAffiliate = function () {
  const URL = 'saveAffiliate';
  const API = host + URL;
  return API;
};
//删除关联联系人
export const updateChildStatus = function () {
  const URL = 'updateChildStatus';
  const API = host + URL;
  return API;
};
//修改关联联系人
export const updateChild = function () {
  const URL = 'updateChild   ';
  const API = host + URL;
  return API;
};
//新增关联联系人生理指标信息
export const saveChildRecord = function () {
  const URL = 'saveChildRecord';
  const API = host + URL;
  return API;
};
//预约小儿肺炎
export const savePediatricPneumonia = function () {
  const URL = 'savePediatricPneumonia';
  const API = host + URL;
  return API;
};
//用户获取小儿肺炎预约列表
export const getPediatricPneumoniaList = function () {
  const URL = 'getPediatricPneumoniaList';
  const API = host + URL;
  return API;
};
//用户获取预约就诊列表
export const getAppointmentExamineList = function () {
  const URL = 'getAppointmentExamineList';
  const API = host + URL;
  return API;
};
