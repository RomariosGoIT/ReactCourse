import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-project-53cd6.firebaseio.com/'
});


export default instance;