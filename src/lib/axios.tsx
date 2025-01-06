import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;