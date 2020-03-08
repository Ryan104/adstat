import { get as baseGet, getOne as baseGetOne } from "./base-repository";

const endpoint = "/product";

export const get = baseGet(endpoint);
export const getOne = baseGetOne(endpoint);
