import { request } from './request';

export const updateEvent = (event) => request('/api/v1/auth/', 'PATCH', { event });
