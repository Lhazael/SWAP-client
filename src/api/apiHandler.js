import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/api",
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

const apiHandler = {
  service,

  signup(userInfo) {
    return service
      .post("/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getSneakers() {
    return service
    .get("/sneakers")
    .then((res) => res.data)
    .catch(errorHandler);
  },

  getOffers() {
    return service
      .get("/offers")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteOffer(offerId) {
    return service 
      .delete(`/offers/${offerId}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateOffer(offerId, data) {
    return service
      .patch(`/offers/${offerId}`, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  addOffer(data) {
    return service
      .post("/offers", data)
      .catch(errorHandler);
  },

  getUserInfos() {
    return service  
      .get("/users")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateUser(userId, data) {
    return service 
      .patch("/users", data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getUserOffers() {
    return service
      .get("/users/offers")
      .then((res) => res.data)
      .catch(errorHandler);
  },
};

export default apiHandler;
