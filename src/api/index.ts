import axios, { AxiosRequestConfig, AxiosResponse }  from 'axios';
import { ItemType } from '../types'


const authToken = "246513f2-92d1-11ec-b909-0242ac120002";
const apiUrl = "https://script.google.com/macros/s/AKfycbyS5ZQO03Pqctl8XJTnjER3xqwsQ0fnooRExJ9Jqsd-ufvgue9C8CwTOLgk39O56sGP6w/exec";

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

export const addNewItem = async (item: unknown) => {
  return gasApi.post(apiUrl, {
    method: "POST",
    authToken,
    params: item
  }).then(res => {
    console.log(res);
  })
}

export const putItem = async (item: unknown) => {
  return gasApi.post(apiUrl, {
    method: "PUT",
    authToken,
    params: item
  }).then(res => {
    console.log(res, "put");
  })
}

export const deleteItem = async (id: any) => {
  return gasApi.post(apiUrl, {
    method: "DELETE",
    authToken,
    params: id
  }).then(res => {
    console.log(res, "delete");
  })
}