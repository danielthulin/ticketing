import axios from 'axios';

const BuildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // server
    return axios.create({
      baseURL:'http://www.sakertkul.xyz/',
      headers: req.headers
    });
  } else {
    // browser
    return axios.create({
      baseURL:'/'
    });
  }
};

export default BuildClient;
