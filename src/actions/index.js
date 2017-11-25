import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const API_BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=warnaa'

export function fetchPosts() {
    const request = axios
        .get(`${API_BASE_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios
        .post(`${API_BASE_URL}/posts${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}