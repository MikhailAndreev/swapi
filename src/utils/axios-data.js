import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://films-list-397c8.firebaseio.com/'
});

export default instance;