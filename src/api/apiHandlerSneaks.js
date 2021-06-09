import axios from "axios";

const service = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: true, // Cookie is sent to client when using this service. (used for session)
  });
  
  function errorHandler(error) {
    if (error.response.data) {
      console.log(error.response && error.response.data);
      throw error;
    }
    throw error;
  }

const apiHandlerSneaks = {
    service,

    getMostPopular() {
        return service
        .get("/api/sneakers/home")
        .then((res) => res.data)
        .catch(errorHandler);
    },

    getProducts(keyword) {
        return service
        .get(`/search/${keyword}`)
        .then((res) => res.data)
        .catch(errorHandler);
    },

    getProductprices(styleId) {
        return service
        .get(`/id/${styleId}/prices`)
        .then((res) => res.data)
        .catch(errorHandler);
    },
};


export default apiHandlerSneaks;