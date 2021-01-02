import axios from "axios";

export const getUsers = () => {
  const limit = 100;

  console.log("GET getUsers", limit);
  return axios.get("/users", {
    params: {
      limit: limit,
    },
  });
};

export const createUser = ({ firstName, lastName }) => {
  console.log("POST createUser", { firstName, lastName });
  return axios.post("/users", {
    firstName,
    lastName,
  });
};

export const deleteUser = (userId) => {
  console.log("DELETE deleteUser", userId);
  return axios.delete(`/users/${userId}`);
};
