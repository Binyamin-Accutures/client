import axios from "axios"

axios.defaults.baseURL = "localhost"
// axios.defaults.baseURL = "https://deployment.app"

export const setToken = (token) => {
    // when you do logout pass the parameter as an empty string
    
}


const apiCalls = async (method, url, data) => {

    console.log(" +++  \n api call - send ", method, url, data);
    try {
        const res = await axios({
           
        })

        console.log(" +++  \n api call - res", res.data);

        return res.data
    }

    catch (error) {

        // console.log(" +++  \n api call - error", error);
        throw error
    }
}

export default apiCalls