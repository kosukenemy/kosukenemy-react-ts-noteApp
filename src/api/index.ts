import axios, { AxiosRequestConfig, AxiosResponse }  from 'axios';
import { ItemType } from '../types'

const authToken = import.meta.env.VITE_AUTH_TOKEN;
const apiUrl = "https://script.google.com/macros/s/AKfycbzariRxpsboPYGlVzlbfAnhzV2zIz3Pd7aqeXL5p0g4TnNJ0wAB5SJq8-VCzR76ZJPUow/exec";


const gasApi = axios.create({
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
  }
});

gasApi.interceptors.response.use(res => {
  if (res.data.error) {
    return Promise.reject(res.data.error)
  }
  return Promise.resolve(res)
}, err => {
  return Promise.reject(err)
});

const getOptions: AxiosRequestConfig = {
  url:`${apiUrl}`,
  method: "GET",
};

export const fetchAPI = async () => {
  try {
    const response: AxiosResponse = await axios(getOptions);
    return response.data

  } catch (err) { 
    return err;
  }
}

export const addNewItem = async (item: ItemType) => {
  return gasApi.post(apiUrl, {
    method: "POST",
    authToken,
    params: item
  }).then(response => {
    return response
  }).catch(error => {
    return error;
  })
}

export const putItem = async (item: ItemType) => {
  return gasApi.post(apiUrl, {
    method: "PUT",
    authToken,
    params: item
  }).then(response => {
    return response;
  }).catch(error => {
    return error;
  })
}

export const deleteItem = async (id: ItemType) => {
  return gasApi.post(apiUrl, {
    method: "DELETE",
    authToken,
    params: id
  }).then(response => {
    return response;
  }).catch(error => {
    return error;
  })
}