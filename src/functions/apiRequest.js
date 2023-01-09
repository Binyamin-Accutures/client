import axios from "axios"
axios.defaults.baseURL = "localhost:3000"
// axios.defaults.baseURL = "https://deployment.app"

export const setToken = async (token) => {
    // when you do logout pass the parameter as an empty string
    axios.defaults.headers.common.Authorization =  `Bearer ${token}`

}

const apiCalls = async (method, url, data) => {

    console.log(" +++  \n api call - send ", method, url, data);
    try {
        
        console.log(axios.defaults);
        const res = await axios({
            method: method,
            url: url,
            body:data
          });

        console.log(" +++  \n api call - res", res);
        return res.data
    }
    catch (error) {
        // console.log(" +++  \n api call - error", error);
        throw error
    }
}

export default apiCalls