import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-b2c9e.cloudfunctions.net/api'
    // localhost
    // 'http://localhost:5001/clone-b2c9e/us-central1/api'  
});

export default instance;