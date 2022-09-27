import axios from "axios"

const api =  axios.create({

    baseURL: 'http://10.92.198.27:8080'

})

export default api