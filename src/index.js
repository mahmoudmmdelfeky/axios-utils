import axios from 'axios';

let globalConfig = {};
const pendingRequests = new Map();

const createAxiosInstance = (config) => {
  const axiosInstance = axios.create(Object.assign({}, globalConfig, config));

  axiosInstance.cancelRequest = (id) => {
    const sources = pendingRequests.get(id);
    if (sources) {
      sources.forEach((source) => {
        source.cancel();
      });
      pendingRequests.delete(id);
    }
  };

  axiosInstance.cancelAllRequests = () => {
    pendingRequests.forEach((sources, id) => {
      sources.forEach((source) => {
        source.cancel();
      });
      // pendingRequests.delete(id);
    });
  };

  axiosInstance.interceptors.request.use(
    (config) => {
      const source = axios.CancelToken.source();
      config.cancelToken = source.token;
      const id = config.url; // Use the URL as the ID
      let sources = pendingRequests.get(id);
      if (!sources) {
        sources = [];
        pendingRequests.set(id, sources);
      }
      sources.push(source);

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (axios.isCancel(error)) {
        return Promise.reject(error);
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

const axiosRequestCancel = createAxiosInstance();
const setGlobalConfig = (config) => {
  globalConfig = Object.assign({}, globalConfig, config);
  axiosRequestCancel.defaults = globalConfig;
};

axiosRequestCancel.withConfig = (config) => {
  const axiosInstance = createAxiosInstance(config);

  return axiosInstance;
};

export { axiosRequestCancel, setGlobalConfig };
