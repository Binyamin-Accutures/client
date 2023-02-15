import axios from "axios"
//axios.defaults.baseURL = "localhost:3000"
// axios.defaults.baseURL = "https://deployment.app"

export const setToken = async (token) => {
    // when you do logout pass the parameter as an empty string
    axios.defaults.headers.common.Authorization = token? `Bearer ${token}`:null;

}

const apiCalls = async (method, url, data) => {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`
    try {
        const res = await axios({
            method: method,
            url: url,
            data:data
          });

        return res
    }
    catch (error) {
        throw error
    }
}

export default apiCalls