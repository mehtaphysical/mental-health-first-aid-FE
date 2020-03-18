import { request } from './request';

export const postMessage = (message) => request('/api/v1/positives', 'POST', message);
