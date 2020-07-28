import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-eab49.firebaseio.com/',
});

export default instance;
