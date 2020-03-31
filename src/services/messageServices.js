import { request } from './request';

export const postMessage = (message) => request('/api/v1/positives', 'POST', message);
export const getMessages = () => request('/api/v1/positives', 'GET');
export const updateMessage = (id, body) => request(`/api/v1/positives/${id}`, 'PATCH', body);
export const deletePositive = (id) => request(`/api/v1/positives/${id}`, 'DELETE');
