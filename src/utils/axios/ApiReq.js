import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
})

let refreshing = null
const refreshAccessToken = async () => {
  if (!refreshing) {
    refreshing = await axios.post("http://localhost:3000/auth/refresh", {}, { withCredentials: true })
      .then(() => true).catch(() => false).finally(() => null);
  }
  return refreshing
}

const apiInstanceOnReject = async (err) => {
  const originalReq = err.config;
  if (!originalReq || err.response?.status != 401 || err.response?.data?.code !== "SESSIONEXPIRED") {
    return Promise.reject(err)
  }
  if (originalReq.url?.includes("/auth/refresh")) {
    return Promise.reject(err)
  }

  if (originalReq._retry) {
    return Promise.reject(err)
  }

  originalReq._retry = true;

  const refreshed = await refreshAccessToken()
  if (!refreshed) {
    return Promise.reject(err)
  }

  return api(originalReq)
}

api.interceptors.response.use((res) => res, apiInstanceOnReject)
