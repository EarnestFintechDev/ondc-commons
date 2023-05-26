import { FetchRequest } from "./fethRequest";

export const on_select = async (method: string, baseUrl: string, body: any) => {
  const url = baseUrl + "/on_select";
  return await FetchRequest(url, method, JSON.stringify(body));
};
export const on_search = async (method: string, baseUrl: string, body: any) => {
  const url = baseUrl + "/on_search";
  return await FetchRequest(url, method, JSON.stringify(body));
};
export const on_status = async (method: string, baseUrl: string, body: any) => {
  const url = baseUrl + "/on_status";
  return await FetchRequest(url, method, JSON.stringify(body));
};
export const on_rating = async (method: string, baseUrl: string, body: any) => {
  const url = baseUrl + "/on_rating";
  return await FetchRequest(url, method, JSON.stringify(body));
};
export const on_track = async (method: string, baseUrl: string, body: any) => {
  const url = baseUrl + "/on_track";
  return await FetchRequest(url, method, JSON.stringify(body));
};
export const on_update = async (method: string, baseUrl: string, body: any) => {
  const url = baseUrl + "/on_update";
  return await FetchRequest(url, method, JSON.stringify(body));
};
export const on_support = async (
  method: string,
  baseUrl: string,
  body: any
) => {
  const url = baseUrl + "/on_update";
  return await FetchRequest(url, method, JSON.stringify(body));
};
export const on_init = async (method: string, baseUrl: string, body: any) => {
  const url = baseUrl + "/on_init";
  return await FetchRequest(url, method, JSON.stringify(body));
};
export const on_cancel = async (method: string, baseUrl: string, body: any) => {
  const url = baseUrl + "/on_cancel";
  return await FetchRequest(url, method, JSON.stringify(body));
};
export const on_confirm = async (
  method: string,
  baseUrl: string,
  body: any
) => {
  const url = baseUrl + "/on_confirm";
  return await FetchRequest(url, method, JSON.stringify(body));
};
