import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, petId) => request.post(`${baseUrl}/likes`, {userId, petId});
export const getPetLikes = (petId) => {
    const query = encodeURIComponent(`petId="${petId}"`);

    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};