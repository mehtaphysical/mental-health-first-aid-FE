import { request } from './request';

export const postMessage = (message) => request('/api/v1/positives', 'POST', message);

export const getMessages = () => request('/api/v1/positives', 'GET');
