import { request } from './request';

export const postEvent = event => request('/api/v1/events', 'POST', event);
export const getEvent = () => request('/api/v1/events', 'GET');
export const patchEvent = event => request('/api/v1/events', 'PATCH', event);
