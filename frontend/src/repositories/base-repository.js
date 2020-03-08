import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const get = baseEndpoint => async () => {
  const res = await axios.get(`${baseURL}${baseEndpoint}`);
  return res.data;
};

export const getOne = baseEndpoint => async id => {
  const res = await axios.get(`${baseURL}${baseEndpoint}/${id}`);
  return res.data;
};
