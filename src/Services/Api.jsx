import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL || "http://192.168.29.214:8080/Solwyzwebsite";
// const apiUrl = process.env.REACT_APP_API_URL || "http://192.168.29.214:8080/Solwyzwebsite";

const Api = {

    get: async (url, header) => {
        try {
            let result = await axios.get(`${apiUrl}/${url}`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        ...header
                    }
                }
            )
            return result
        }
        catch (err) {
            return err
        }
    },

    post: async (url, data, header) => {
        try {
            let result = await axios.post(`${apiUrl}/${url}`, data,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        ...header
                    }
                }
            )
            return result
        }
        catch (err) {
            return err
        }
    },

    delete: async (url, header) => {
        try {
            let result = await axios.delete(`${apiUrl}/${url}`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        ...header
                    }
                }
            )
            return result
        }
        catch (err) {
            return err
        }
    },

    put: async (url, data, header) => {
        try {
            let result = await axios.put(`${apiUrl}/${url}`, data,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        ...header
                    }
                }
            )
            return result
        }
        catch (err) {
            return err
        }
    }

}

export default Api

