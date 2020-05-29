import axios from 'axios';
let baseURL;
console.log(process.env.NODE_ENV)

process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://frozen-refuge-85243.herokuapp.com')
  // ? (baseURL = window.location.origin)
  : (baseURL = 'http://localhost:5001');

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get('/is-logged-in')
  },
  signUp: async (user) => {
    return await service.post('/signup', user)
  },
  logIn: async (user) => {
    return await service.post('/login', user)
  },
  logOut: async () => {
    return await service.get('/logout')
  },
  getPosts: async() => {
    return await service.get('/posts')
  },
  newPost: async (post) => {
    return await service.post('/new-post', post)
  }
};

export default actions;
