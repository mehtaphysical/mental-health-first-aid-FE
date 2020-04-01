import { request } from './request';

export const postPositive = (positive) => request('/api/v1/positives', 'POST', positive);
export const getPositives = () => request('/api/v1/positives', 'GET');
export const updatePositive = (id, body) => request(`/api/v1/positives/${id}`, 'PATCH', body);
export const deletePositive = (id) => request(`/api/v1/positives/${id}`, 'DELETE');
