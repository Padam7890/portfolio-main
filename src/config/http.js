import axios from "axios";

const http = axios.create({
    baseURL: 'https://portfolio-backend-express-six.vercel.app',
  });

  export default http;