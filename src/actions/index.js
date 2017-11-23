import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const API_BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=warnaa'

export function fetchPosts() {
    const request = axios.get(`${API_BASE_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}