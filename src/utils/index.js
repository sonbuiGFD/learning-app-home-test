import { toastr } from 'react-redux-toastr';
import { format } from 'date-fns';

let UUID_COUNT = 0;
export const getUniqueID = () => {
  UUID_COUNT += 1;
  return `UUID_${UUID_COUNT}`;
};

export const storeData = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log('storeData', error);
  }
};

export const getData = (key) => {
  let res = '';
  try {
    res = localStorage.getItem(key);
  } catch (error) {
    console.log('getData', error);
  }
  return res;
};

export const formatDate = (d) => {
  if (!d) {
    return '';
  }
  const date = new Date(d);

  return format(date, 'dd/MM/yyyy');
};

export const actionCreator = (actionName, extraField = []) => {
  const actionType = {
    NAME: actionName,
    PENDING: `${actionName}_PENDING`,
    SUCCESS: `${actionName}_SUCCESS`,
    ERROR: `${actionName}_ERROR`,
  };
  extraField.forEach((field) => {
    actionType[field] = `${actionName}_${field}`;
  });

  return actionType;
};

export const actionTryCatchCreator = async ({ service, onPending, onSuccess, onError, ignoreError }) => {
  const isIgnoreError = ignoreError || false;
  try {
    if (onPending) onPending();
    // const { status, data } = await service;
    const res = await service;

    // if (status === 200) {
    if (onSuccess) onSuccess(res);
    // } else {
    //   throw String(`HTTP request with code ${status}`);
    // }
  } catch (error) {
    if (onError) onError(error);
    if (isIgnoreError) {
      return;
    }
    if (typeof error === 'object') {
      toastr.error(`${error.message}`);
    } else {
      toastr.error(error);
    }
  }
};

export const formatFloatNumber = function (number, decimalNumber = 2) {
  const fixedNumber = Number.parseFloat(number).toFixed(decimalNumber);
  return String(fixedNumber).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const truncates = (string, maxLength = 50) => {
  if (!string) return null;
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength)}...`;
};

export const IsIOSDevice = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

export const formatDurationTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.round(seconds % 60);
  return [h, m > 9 ? m : h ? `0${m}` : m || '0', s > 9 ? s : `0${s || 0}`].filter(Boolean).join(':');
};
