import { request } from './request';

export const postMood = (mood) => request('/api/v1/moods', 'POST', mood);
export const getMoods = () => request('/api/v1/moods', 'GET');
export const updateMood = (id, body) => request(`/api/v1/moods/${id}`, 'PATCH', body);
export const deleteMood = id => request(`/api/v1/moods/${id}`, 'DELETE');
