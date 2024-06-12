import { toast } from 'react-toastify';

const xhrRequest = (method, url, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText);
          toast.success('Request succeeded');
          resolve(response);
        } catch (e) {
          toast.error('Invalid JSON response from server');
          reject({ message: 'Invalid JSON response from server' });
        }
      } else {
        try {
          const error = JSON.parse(xhr.responseText);
          toast.error(error.message || 'An error occurred');
          reject(error);
        } catch (e) {
          toast.error('An error occurred');
          reject({ message: 'An error occurred' });
        }
      }
    };
    xhr.onerror = () => {
      const error = { message: 'Network error' };
      toast.error(error.message);
      reject(error);
    };
    xhr.send(JSON.stringify(data));
  });
};

export const xhrGet = (url) => xhrRequest('GET', url);
export const xhrPut = (url, data) => xhrRequest('PUT', url, data);
export const xhrDelete = (url) => xhrRequest('DELETE', url);
export const xhrPost = (url, data) => xhrRequest('POST', url, data);
